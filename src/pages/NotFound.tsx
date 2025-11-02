import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-teal-50/30 relative overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          >
            <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Page introuvable
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
            <br />
            Retournez à l'accueil ou explorez nos autres pages.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </motion.button>

            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-sm text-gray-500 mb-4">Liens rapides :</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/produit')}
                className="text-primary hover:text-teal-600 font-medium transition-colors"
              >
                Produit
              </button>
              <span className="text-gray-300">•</span>
              <button
                onClick={() => navigate('/a-propos')}
                className="text-primary hover:text-teal-600 font-medium transition-colors"
              >
                À propos
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

