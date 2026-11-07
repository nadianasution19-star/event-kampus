// src/components/EventTable.jsx — tabel daftar acara
import EventRow from './EventRow'

export default function EventTable({ events, onUpdate, onDelete }) {
  if (events.length === 0) return <p>Belum ada acara.</p>

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama acara</th>
            <th>Tanggal</th>
            <th>Lokasi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <EventRow
              key={event.id}
              event={event}
              index={index}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}