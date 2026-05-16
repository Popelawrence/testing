import { Link } from 'react-router-dom'
import Container from '../components/common/Container'

export default function HomePage() {
  return (
    <Container>
      <section className="hero-section">
        <p className="eyebrow">LeClematis</p>
        <h1>Rooted in nature, shaped by vintage style, defined by photography.</h1>
        <p className="hero-copy">
          LeClematis brings together a quiet, textured brand world built on botanical storytelling,
          curated one-of-a-kind finds, and evocative imagery.
        </p>
        <div className="hero-actions">
          <Link to="/shop" className="hero-button">
            Shop curated pieces
          </Link>
          <Link to="/photography" className="hero-link">
            Explore photography
          </Link>
        </div>
      </section>

      <section className="brand-panels">
        <article className="brand-panel">
          <h2>Nature</h2>
          <p>
            Soft editorial scenes, botanical textures, and slow-paced seasonal storytelling that
            feels grounded and lush.
          </p>
          <Link to="/nature">See the story</Link>
        </article>

        <article className="brand-panel">
          <h2>Vintage</h2>
          <p>
            Thoughtfully sourced pieces with character, craftsmanship, and history for the modern
            wardrobe and home.
          </p>
          <Link to="/vintage">Browse vintage</Link>
        </article>

        <article className="brand-panel">
          <h2>Photography</h2>
          <p>
            A quiet visual portfolio, offering prints and sessions that celebrate authentic light and
            handcrafted composition.
          </p>
          <Link to="/photography">View photography</Link>
        </article>
      </section>
    </Container>
  )
}
