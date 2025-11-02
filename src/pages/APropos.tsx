import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, CheckCircle } from 'lucide-react'
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
      title: "Notre mission",
      description: "Réduire l'écart entre le potentiel, les compétences et la performance réelle.\nSkillsio évalue, analyse et accompagne les collaborateurs tout au long de leur parcours pour objectiver la progression et soutenir les transformations humaines et organisationnelles.\nNotre mission : faire de l'évaluation un outil stratégique d'accompagnement, au service du développement des talents, du leadership et de la performance durable.",
      gradient: "from-primary/10 to-teal-500/10"
    },
    {
      icon: Eye,
      title: "Notre vision",
      description: "Créer un écosystème où chacun progresse selon ses forces, ses besoins et ses ambitions. Skillsio imagine un futur où l'accompagnement est continu, les retours sont instantanés, et les données sur les compétences permettent à chaque individu et à chaque organisation de piloter leur évolution en toute autonomie.\nGrâce à l'intelligence artificielle et à une approche centrée sur l'humain, nous rendons le développement des compétences et de la performance à la fois mesurable, fluide et personnalisé.",
      gradient: "from-teal-500/10 to-emerald-500/10"
    }
  ]

  const approachPillars = [
    {
      number: "01",
      title: "Mesurer avec précision",
      description: "Mesurer avec précision les compétences techniques, comportementales et relationnelles pour établir une base objective."
    },
    {
      number: "02",
      title: "Accompagner le développement",
      description: "Accompagner le développement des individus et des équipes grâce à des feedbacks ciblés, des recommandations dynamiques et un suivi continu (Follow-Up intelligent)."
    },
    {
      number: "03",
      title: "Évaluer les progrès",
      description: "Évaluer les progrès dans le temps pour démontrer l'impact réel de l'accompagnement sur la performance, la motivation et la transformation organisationnelle."
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

      {/* Mission, Vision Cards */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12" ref={pillarsRef}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                >
                  <div className={`relative bg-gradient-to-br ${pillar.gradient} rounded-3xl p-8 md:p-12 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl`}>
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                          {pillar.title}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
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
                Notre approche
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Skillsio s'appuie sur trois piliers fondamentaux pour garantir un accompagnement complet et efficace
              </p>
            </div>

            <div className="space-y-0">
              {approachPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-6 items-center group"
                  initial={{ opacity: 0, x: -50 }}
                  animate={approachInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Number badge with connector */}
                  <div className="flex-shrink-0 relative flex flex-col items-center">
                    {/* Connector line above (except for first item) */}
                    {index > 0 && (
                      <div className="absolute bottom-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-teal-500/50 mb-0"></div>
                    )}
                    
                    {/* Number badge */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <span className="text-2xl font-bold text-white">{pillar.number}</span>
                    </div>
                    
                    {/* Connector line below (except for last item) */}
                    {index < approachPillars.length - 1 && (
                      <div className="absolute top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-teal-500/50 mt-0"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 my-4">
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
