import { useState } from 'react'

export default function Upload({ onUploaded }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      setError('Please choose an image or video')
      return
    }
    setError('')
    setLoading(true)
    try {
      const form = new FormData()
      form.append('file', file)
      form.append('title', title || file.name)
      form.append('description', description)

      const res = await fetch(`${baseUrl}/api/media`, { method: 'POST', body: form })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setTitle('')
      setDescription('')
      setFile(null)
      if (onUploaded) onUploaded(data.item)
    } catch (err) {
      setError(typeof err === 'string' ? err : err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="upload" className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-6">
          <h2 className="text-xl font-semibold text-neutral-900">Upload media</h2>
          <p className="text-sm text-neutral-600 mt-1">Add images or videos to your gallery.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto] items-end">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Title</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-900" placeholder="Living room, kitchen..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Description</label>
              <input value={description} onChange={(e)=>setDescription(e.target.value)} className="mt-1 w-full rounded-md border-neutral-300 focus:ring-0 focus:border-neutral-900" placeholder="Optional" />
            </div>
            <div className="flex items-end gap-3">
              <label className="flex-1">
                <span className="block text-sm font-medium text-neutral-700">File</span>
                <input type="file" accept="image/*,video/*" onChange={(e)=>setFile(e.target.files?.[0]||null)} className="mt-1 w-full" />
              </label>
              <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 disabled:opacity-50">
                {loading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
          {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
        </div>
      </div>
    </section>
  )
}
