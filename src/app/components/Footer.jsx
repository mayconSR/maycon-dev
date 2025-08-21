export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border/30 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto px-4 py-6 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Maycon Dev. Alguns direitos reservados.</p>
          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4">
            <a className="hover:text-foreground" href="/privacy">Privacidade</a>
            <a className="hover:text-foreground" href="/contact">Contato</a>
            <a className="hover:text-foreground" href="https://github.com/mayconSR" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
