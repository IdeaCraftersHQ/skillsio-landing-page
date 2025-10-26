import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import logoWhite from '../assest/logo.svg'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden border-t border-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoWhite} alt="Skillsio" className="h-8 md:h-10 mb-3 mx-auto md:mx-0" />
            <p className="text-gray-400 text-sm">
              © Skillsio 2025
            </p>
          </motion.div>
          
          {/* Social Icons */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary hover:to-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-primary/50 group"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </motion.a>
            
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary hover:to-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-primary/50 group"
              aria-label="X (Twitter)"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </motion.a>
            
            <motion.a 
              href="mailto:contact@skillsio.com" 
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary hover:to-teal-600 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-primary/50 group"
              aria-label="Email"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
