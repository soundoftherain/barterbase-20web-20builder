export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} BarterBase DAO. All rights reserved.</p>
        <p className="opacity-80">Crypto payments. No custodial services. DYOR.</p>
      </div>
    </footer>
  );
}
