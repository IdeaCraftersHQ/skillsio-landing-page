import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useContext } from 'react'
import { Brain, Users, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import assessmentImage from '../assest/assessment.webp'
import WaveDivider from './WaveDivider'
import { WishlistModalContext } from '../App'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { openModal } = useContext(WishlistModalContext)

  const features = [
    {
      icon: Brain,
      title: "Évaluation des compétences par IA",
      description: "Analysez les réponses, identifiez les écarts et recevez des rapports détaillés avec des recommandations personnalisées.",
      gradient: "from-primary/10 to-teal-500/10"
    },
    {
      icon: Users,
      title: "Gestion RH simplifiée",
      description: "Utilisez une bibliothèque de tests prêts à l'emploi, invitez vos équipes facilement et suivez leurs résultats en temps réel.",
      gradient: "from-emerald-500/10 to-primary/10"
    },
    {
      icon: Shield,
      title: "Expérience fluide et sécurisée",
      description: "Proposez un environnement d'évaluation clair, chronométré et protégé, avec sauvegarde automatique et suivi des progrès.",
      gradient: "from-teal-500/10 to-cyan-500/10"
    },
    {
      icon: TrendingUp,
      title: "Suivi post-formation",
      description: "Comparez les scores avant/après formation pour mesurer l'impact et renforcer le développement des talents.",
      gradient: "from-cyan-500/10 to-primary/10"
    }
  ]

  return (
    <section id="features" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-teal-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-emerald-400/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Two-column layout - alternating from Section 2 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20" ref={ref}>
          {/* Left side - Assessment Screenshot */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                <img 
                  src={assessmentImage} 
                  alt="Skillsio Assessment Interface" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-2xl blur-2xl"></div>
            </div>
          </motion.div>

          {/* Right side - Features list */}
          <motion.div
            className="space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="flex gap-4 group p-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-gray-600 leading-relaxed text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
          
        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.button 
            onClick={openModal}
            className="inline-block bg-white border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-teal-600 hover:text-white font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-xl transform transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            En savoir plus sur le produit
          </motion.button>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-gray-50">
        <WaveDivider flip={true} />
      </div>
    </section>
  )
}

export default FeaturesSection
