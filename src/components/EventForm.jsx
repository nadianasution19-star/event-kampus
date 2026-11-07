// src/components/EventForm.jsx — form tambah acara
import { useState } from 'react'

export default function EventForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !date || !location.trim()) {
      setError('Semua kolom wajib diisi.')
      return
    }
    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      date,
      location: location.trim(),
    })
    setTitle('')
    setDate('')
    setLocation('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Nama acara"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nama acara"
      />
      <input
        aria-label="Tanggal acara"
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        aria-label="Lokasi acara"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Lokasi"
      />
      <button type="submit">Tambah acara</button>
      {error && <p role="alert">{error}</p>}
    </form>
  )
}