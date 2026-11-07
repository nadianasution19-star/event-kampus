// src/App.jsx — state utama & routing
import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import DaftarEvent from './pages/DaftarEvent'
import DetailEvent from './pages/DetailEvent'
import About from './pages/Tentang'
import NotFound from './pages/NotFound'

const contoh = [
  { id: '1', title: 'Seminar AI Kampus', date: '2026-11-12', location: 'Fasilkom-TI' },
  { id: '2', title: 'Workshop React', date: '2026-11-20', location: 'Lab Komputer' },
]

export default function App() {
  const [events, setEvents] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('event-kampus-v1'))
      return Array.isArray(saved) ? saved : contoh
    } catch {
      return contoh
    }
  })

  useEffect(() => {
    localStorage.setItem('event-kampus-v1', JSON.stringify(events))
  }, [events])

  function addEvent(event) {
    setEvents(prev => [...prev, event])
  }

  function updateEvent(id, changes) {
    setEvents(prev =>
      prev.map(event => (event.id === id ? { ...event, ...changes } : event))
    )
  }

  function deleteEvent(id) {
    setEvents(prev => prev.filter(event => event.id !== id))
  }

  return (
    <main className="app">
      <header>
        <h1>🎓 Event Kampus</h1>
        <nav>
          <Link to="/">Daftar Event</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <DaftarEvent
              events={events}
              onAdd={addEvent}
              onUpdate={updateEvent}
              onDelete={deleteEvent}
            />
          }
        />
        <Route path="/event/:id" element={<DetailEvent events={events} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}