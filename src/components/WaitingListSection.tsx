import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useContext } from 'react'
import { Mail, Sparkles } from 'lucide-react'
import { WishlistModalContext } from '../App'

const WaitingListSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { openModal } = useContext(WishlistModalContext)

  return (
    <section id="waiting-list" className="relative py-20 md:py-32 bg-gradient-to-br from-white via-teal-50/20 to-primary/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-emerald-400/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-[#F1F8F5] to-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border-2 border-primary/20 overflow-hidden backdrop-blur-sm">
            {/* Decorative sparkles */}
            <div className="absolute top-6 right-6 opacity-20">
              <Sparkles className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-6 left-6 opacity-10">
              <Sparkles className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-teal-600 to-primary bg-clip-text text-transparent leading-tight">
                Rejoignez les premiers utilisateurs de Skillsio
              </h2>
              
              <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Inscrivez-vous à notre newsletter pour être parmi les premiers à découvrir Skillsio
              </p>
              
              <motion.button 
                onClick={openModal}
                className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Rejoindre la liste d'attente
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WaitingListSection
