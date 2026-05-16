import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import NaturePage from '../pages/NaturePage'
import PhotographyPage from '../pages/PhotographyPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ShopPage from '../pages/ShopPage'
import VintagePage from '../pages/VintagePage'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/vintage" element={<VintagePage />} />
      <Route path="/photography" element={<PhotographyPage />} />
      <Route path="/nature" element={<NaturePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRouter
