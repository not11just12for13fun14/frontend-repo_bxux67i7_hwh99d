import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Upload from './components/Upload'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const handleUploaded = () => {
    // On upload, we can refresh the gallery by reloading the page for simplicity
    // (In a larger app, we'd lift state or use context)
    window.location.hash = '#gallery'
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Upload onUploaded={handleUploaded} />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
