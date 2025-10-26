import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, Phone } from 'lucide-react'

interface WishlistModalProps {
  isOpen: boolean
  onClose: () => void
}

const WishlistModal = ({ isOpen, onClose }: WishlistModalProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setShowSuccess(false) // Reset success state when modal opens
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Manually trigger the external script's modal
    const form = e.currentTarget
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement
    const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement
    const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement

    const email = emailInput?.value
    const nameValue = nameInput?.value || null
    const phoneValue = phoneInput?.value || null

    if (!email) return

    // Create the captcha modal (same logic as external script)
    const body = document.body
    const originalOverflow = body.style.overflow

    const modalOverlay = document.createElement('div')
    modalOverlay.style.position = 'fixed'
    modalOverlay.style.top = '0'
    modalOverlay.style.left = '0'
    modalOverlay.style.width = '100%'
    modalOverlay.style.height = '100%'
    modalOverlay.style.background = 'rgba(0, 0, 0, 0.5)'
    modalOverlay.style.display = 'flex'
    modalOverlay.style.justifyContent = 'center'
    modalOverlay.style.alignItems = 'center'
    modalOverlay.style.zIndex = '9999' // Higher than our modal

    const modal = document.createElement('div')
    modal.style.background = '#fff'
    modal.style.padding = '20px'
    modal.style.borderRadius = '8px'
    modal.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
    modal.style.maxWidth = '90%'
    modal.style.maxHeight = '90%'
    modal.style.position = 'relative'
    modal.style.width = '500px'
    modal.style.height = '500px'

    const closeButton = document.createElement('span')
    closeButton.innerHTML = '&times;'
    closeButton.style.position = 'absolute'
    closeButton.style.top = '10px'
    closeButton.style.right = '10px'
    closeButton.style.cursor = 'pointer'
    closeButton.style.fontSize = '28px'
    closeButton.style.fontWeight = 'bold'
    closeButton.style.color = '#666'

    const iframe = document.createElement('iframe')
    const params = new URLSearchParams()
    params.append('email', email)
    if (nameValue) params.append('name', nameValue)
    if (phoneValue) params.append('phone', phoneValue)

    iframe.src = `https://lineup.launchpit.dev/wl_zh9JnNsS/captcha?${params.toString()}`
    iframe.style.width = '100%'
    iframe.style.height = '80vh'
    iframe.style.border = 'none'

    modal.appendChild(closeButton)
    modal.appendChild(iframe)
    modalOverlay.appendChild(modal)
    body.appendChild(modalOverlay)
    body.style.overflow = 'hidden'

    function closeCaptchaModal() {
      body.removeChild(modalOverlay)
      body.style.overflow = originalOverflow
      window.removeEventListener('message', successMessageListener)
    }

    closeButton.onclick = closeCaptchaModal
    modalOverlay.onclick = function (event) {
      if (event.target === modalOverlay) {
        closeCaptchaModal()
      }
    }

    function successMessageListener(event: MessageEvent) {
      if (event.data === 'firstcome:success') {
        closeCaptchaModal()
        // Show success message in the modal
        setShowSuccess(true)
        // Clear form fields
        setName('')
        setEmail('')
        setPhone('')
      }
    }

    window.addEventListener('message', successMessageListener)
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-br from-primary to-teal-600 px-8 pt-8 pb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Rejoignez la liste d'attente
              </h2>
              <p className="text-white/90 text-sm">
                Soyez parmi les premiers à découvrir Skillsio
              </p>
            </div>

            {/* Form or Success Message */}
            <div className="px-8 py-6">
              {showSuccess ? (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Inscription réussie !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Merci de votre intérêt pour Skillsio. Nous vous contacterons bientôt avec plus d'informations.
                  </p>
                  <motion.button
                    onClick={onClose}
                    className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Fermer
                  </motion.button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} data-target="firstcome">
                <div className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+33 6 12 34 56 78"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rejoindre la liste d'attente
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Vos données sont sécurisées et ne seront jamais partagées.
                </p>
              </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WishlistModal
