import { useEffect, useState } from 'react'

export default function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/media`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="gallery" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Gallery</h2>
          <p className="text-sm text-neutral-600">{items.length} items</p>
        </div>
        {loading ? (
          <p className="text-neutral-600">Loading...</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <article key={it._id || it.filename} className="group rounded-xl overflow-hidden bg-white border border-neutral-200">
                {it.kind === 'video' ? (
                  <video controls playsInline className="w-full aspect-video">
                    <source src={it.url.startsWith('http') ? it.url : `${baseUrl}${it.url}`} type={it.content_type} />
                  </video>
                ) : (
                  <img src={it.url.startsWith('http') ? it.url : `${baseUrl}${it.url}`} alt={it.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                )}
                <div className="p-4">
                  <h3 className="font-medium text-neutral-900 line-clamp-1">{it.title}</h3>
                  {it.description && <p className="text-sm text-neutral-600 line-clamp-2 mt-1">{it.description}</p>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
