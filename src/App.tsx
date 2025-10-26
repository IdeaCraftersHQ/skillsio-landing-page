import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produit from './pages/Produit'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import WishlistModal from './components/WishlistModal'

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
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produit" element={<Produit />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <WishlistModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </Router>
    </WishlistModalContext.Provider>
  )
}

export default App
