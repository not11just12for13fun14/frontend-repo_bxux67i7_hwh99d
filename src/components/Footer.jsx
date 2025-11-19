export default function Footer(){
  return (
    <footer id="about" className="bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">About</h3>
          <p className="mt-2 text-neutral-600 max-w-prose">We present homes with a Scandinavian sensibility: clean lines, honest materials, and warm light. Minimal yet welcoming.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">Contact</h3>
          <p className="mt-2 text-neutral-600">hello@nordic.estate<br/>+46 70 123 45 67</p>
        </div>
      </div>
      <div className="text-center text-sm text-neutral-500 py-6">© {new Date().getFullYear()} Nordic Estate</div>
    </footer>
  )
}
