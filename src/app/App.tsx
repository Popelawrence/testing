import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Providers from './providers'
import AppRouter from './router'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

function App() {
  return (
    <Providers>
      <BrowserRouter>
        {/* App shell with header, routed content, and footer */}
        <div className="app-shell">
          <Header />
          <main className="app-main">
            <AppRouter />
          </main>
          <Footer />
        </div>
        <Analytics />
      </BrowserRouter>
    </Providers>
  )
}

export default App
