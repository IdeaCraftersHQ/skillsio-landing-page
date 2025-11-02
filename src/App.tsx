import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, createContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produit from './pages/Produit'
import APropos from './pages/APropos'
import NotFound from './pages/NotFound'
import WishlistModal from './components/WishlistModal'

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export const WishlistModalContext = createContext<{
  openModal: () => void
  closeModal: () => void
}>({ openModal: () => {}, closeModal: () => {} })

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <WishlistModalContext.Provider value={{ openModal, closeModal }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produit" element={<Produit />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <WishlistModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </Router>
    </WishlistModalContext.Provider>
  )
}

export default App
