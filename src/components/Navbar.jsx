import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neutral-900" />
            <span className="font-semibold tracking-tight text-neutral-900">Nordic Estate</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
            <a href="#gallery" className="hover:text-neutral-900 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>
          <button className="sm:hidden p-2 rounded-md hover:bg-neutral-100">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
