import { BrowserRouter } from 'react-router-dom'
import Providers from './providers'
import AppRouter from './router'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <div className="app-shell">
          <Header />
          <main className="app-main">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Providers>
  )
}

export default App
