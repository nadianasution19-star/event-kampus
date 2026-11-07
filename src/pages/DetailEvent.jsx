// src/pages/DetailEvent.jsx — halaman detail acara
import { Link, useNavigate, useParams } from 'react-router'

export default function DetailEvent({ events }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = events.find(item => item.id === id)

  if (!event) {
    return <p>Acara tidak ditemukan. <Link to="/">Kembali</Link></p>
  }

  return (
    <section>
      <h2>{event.title}</h2>
      <p>Tanggal: {event.date}</p>
      <p>Lokasi: {event.location}</p>
      <button onClick={() => navigate('/')}>Kembali ke daftar</button>
    </section>
  )
}