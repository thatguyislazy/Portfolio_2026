export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-sm text-slate-500">
        <div className="font-mono">
          © {new Date().getFullYear()} Marc Adrian M. Cuano — built with care.
        </div>
        <div className="font-mono text-xs">
          Designed & coded in Batangas City · v1.0
        </div>
      </div>
    </footer>
  );
}