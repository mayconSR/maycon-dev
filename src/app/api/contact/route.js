export async function POST(request) {
  try {
    const body = await request.json();

    // Endpoint na hostinger *-* viva a gambiarra
    const resp = await fetch(process.env.CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.CONTACT_API_KEY,
      },
      body: JSON.stringify(body),
    });

    const text = await resp.text();
    return new Response(text, {
      status: resp.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[CONTACT][PROXY_ERROR]", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
