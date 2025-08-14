export async function POST(request) {
  try {
    const body = await request.json();
    const { name = "", email = "", message = "" } = body || {};

    // validação simples
    if (!name?.trim() || !email?.includes("@") || !message?.trim()) {
      return Response.json({ ok: false, error: "Campos inválidos" }, { status: 400 });
    }

    // se não houver Resend, apenas loga (dev)
    if (!process.env.RESEND_API_KEY) {
      console.log("[CONTACT]", { name, email, message });
      return Response.json({ ok: true });
    }

    // envio via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "no-reply@mail.maycondev.com.br",
        to: process.env.CONTACT_TO || "contato@maycondev.com.br",
        subject: `Novo contato: ${name}`,
        reply_to: email,
        text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("[CONTACT][RESEND_ERROR]", t);
      return Response.json({ ok: false }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT][ERROR]", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
