import { motion } from 'framer-motion'
import logoWhite from '../assest/logo.svg'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden border-t border-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo and Copyright */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoWhite} alt="Skillsio" className="h-8 md:h-10 mb-3 mx-auto" />
            <p className="text-gray-400 text-sm">
              © Skillsio 2025
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
