import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Globe, Settings, CheckCircle } from 'lucide-react'
import WaitingListSection from '../components/WaitingListSection'

const APropos = () => {
  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: "-100px" })
  
  const pillarsRef = useRef(null)
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" })

  const approachRef = useRef(null)
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" })

  const pillars = [
    {
      icon: Target,
      title: "Mission",
      description: "Aider les entreprises et les individus à mesurer, développer et valoriser les compétences réelles grâce à une technologie d'évaluation intelligente et accessible.",
      gradient: "from-primary/10 to-teal-500/10"
    },
    {
      icon: Globe,
      title: "Vision",
      description: "Devenir la référence mondiale en matière d'évaluation des compétences par IA, en transformant la manière dont les organisations identifient, développent et optimisent les talents.",
      gradient: "from-teal-500/10 to-emerald-500/10"
    },
    {
      icon: Settings,
      title: "Approche",
      description: "Nous combinons intelligence artificielle de pointe, expertise en sciences de l'éducation et design centré sur l'utilisateur pour créer une expérience d'évaluation fluide et pertinente.",
      gradient: "from-emerald-500/10 to-primary/10"
    }
  ]

  const approachPillars = [
    {
      number: "01",
      title: "Technologie IA avancée",
      description: "Algorithmes d'apprentissage automatique pour une analyse précise et personnalisée des compétences."
    },
    {
      number: "02",
      title: "Expertise pédagogique",
      description: "Méthodologies d'évaluation validées scientifiquement pour garantir la pertinence et la fiabilité des résultats."
    },
    {
      number: "03",
      title: "Design centré utilisateur",
      description: "Interface intuitive et expérience fluide pour faciliter l'adoption et maximiser l'engagement."
    }
  ]

  return (
    <div className="pt-20">
      {/* Intro Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-[#F1F8F5] to-teal-50/30 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-primary/5 to-teal-500/5 rounded-3xl rotate-12"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div 
            ref={introRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={introInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              À propos de Skillsio
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Skillsio est née d'une conviction simple : les compétences réelles sont le moteur de la performance. Notre mission est de rendre l'évaluation des compétences accessible, précise et actionnable pour toutes les organisations qui souhaitent développer leurs talents.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Approach Cards */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid md:grid-cols-3 gap-8" ref={pillarsRef}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={pillarsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className={`bg-gradient-to-br ${pillar.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-primary/10`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approach Pillars - Timeline */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-emerald-400/5 to-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            ref={approachRef}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                Notre approche en 3 piliers
              </h2>
              <p className="text-lg text-gray-600">
                Une méthodologie éprouvée pour garantir des évaluations de qualité
              </p>
            </div>

            <div className="space-y-8">
              {approachPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={approachInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="flex gap-6 items-start group">
                    {/* Number badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{pillar.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-9">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < approachPillars.length - 1 && (
                    <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-primary/50 to-teal-500/50"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waiting List Section */}
      <WaitingListSection />
    </div>
  )
}

export default APropos
