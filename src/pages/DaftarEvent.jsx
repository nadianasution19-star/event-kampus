// src/pages/DaftarEvent.jsx — halaman daftar acara
import EventForm from '../components/EventForm'
import EventTable from '../components/EventTable'

export default function DaftarEvent({ events, onAdd, onUpdate, onDelete }) {
  return (
    <section>
      <h2>Daftar Acara Kampus ({events.length})</h2>
      <EventForm onAdd={onAdd} />
      <EventTable events={events} onUpdate={onUpdate} onDelete={onDelete} />
    </section>
  )
}