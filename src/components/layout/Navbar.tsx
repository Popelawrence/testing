import { Link } from 'react-router-dom'
import navigationLinks from '../../data/navigationLinks'

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <ul>
        {navigationLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
