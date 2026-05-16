import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          LeClematis
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
