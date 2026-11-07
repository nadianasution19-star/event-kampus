// src/pages/NotFound.jsx
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <p>
      404 - Halaman Tidak Ditemukan <Link to="/">Beranda</Link>
    </p>
  )
}