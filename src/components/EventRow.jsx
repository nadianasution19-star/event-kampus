// src/components/EventRow.jsx — satu baris tabel (mode lihat & mode edit)
import { useState } from 'react'
import { Link } from 'react-router'

export default function EventRow({ event, index, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(event)
  const [error, setError] = useState('')

  function startEdit() {
    setDraft(event) // selalu mulai dari data terbaru
    setError('')
    setIsEditing(true)
  }

  function cancelEdit() {
    setIsEditing(false)
    setError('')
  }

  function handleChange(field, value) {
    setDraft(prev => ({ ...prev, [field]: value }))
  }

  function saveEdit() {
    if (!draft.title.trim() || !draft.date || !draft.location.trim()) {
      setError('Semua kolom wajib diisi.')
      return
    }
    onUpdate(event.id, {
      title: draft.title.trim(),
      date: draft.date,
      location: draft.location.trim(),
    })
    setIsEditing(false)
    setError('')
  }

  // Enter = simpan, Escape = batal
  function handleKeyDown(e) {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  if (isEditing) {
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>
            <input
              aria-label="Edit nama acara"
              value={draft.title}
              onChange={e => handleChange('title', e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </td>
          <td>
            <input
              aria-label="Edit tanggal acara"
              type="date"
              value={draft.date}
              onChange={e => handleChange('date', e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </td>
          <td>
            <input
              aria-label="Edit lokasi acara"
              value={draft.location}
              onChange={e => handleChange('location', e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </td>
          <td>
            <div className="actions">
              <button onClick={saveEdit}>Simpan</button>
              <button className="btn-secondary" onClick={cancelEdit}>Batal</button>
            </div>
          </td>
        </tr>
        {error && (
          <tr>
            <td colSpan={5}>
              <p role="alert">{error}</p>
            </td>
          </tr>
        )}
      </>
    )
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td><Link to={`/event/${event.id}`}>{event.title}</Link></td>
      <td>{event.date}</td>
      <td>{event.location}</td>
      <td>
        <div className="actions">
          <button className="btn-secondary" onClick={startEdit}>Edit</button>
          <button className="btn-danger" onClick={() => onDelete(event.id)}>Hapus</button>
        </div>
      </td>
    </tr>
  )
}