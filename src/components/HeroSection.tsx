import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import heroImage from '../assest/hero.webp'

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#F1F8F5]/30 to-teal-50/20 overflow-hidden pt-20">
      {/* Abstract geometric background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 border-2 border-primary/10 rounded-full"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border-2 border-teal-500/10 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-primary/5 to-teal-500/5 rounded-3xl rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-primary/5 rounded-2xl -rotate-12"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 py-12">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-teal-600/10 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-primary" strokeWidth={2} />
              <span className="text-sm font-semibold text-primary">Propulsé par l'IA</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Mesurez, améliorez et valorisez les compétences réelles
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transformez vos évaluations en leviers de performance : détectez les écarts, suivez les progrès et renforcez l'efficacité de vos formations.
            </motion.p>
            
            <motion.a 
              href="#waiting-list"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Rejoignez la liste d'attente
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </motion.a>
          </motion.div>

          {/* Right side - Hero Image */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                <img 
                  src={heroImage} 
                  alt="Skillsio Platform" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-primary/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
