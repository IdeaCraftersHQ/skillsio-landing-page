import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useContext } from 'react'
import { FlaskConical, LayoutDashboard, Lock, BarChart3, CheckCircle, Sparkles, Brain } from 'lucide-react'
import WaitingListSection from '../components/WaitingListSection'
import { WishlistModalContext } from '../App'

const Produit = () => {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const { openModal } = useContext(WishlistModalContext)

  const mainFeatures = [
    {
      icon: FlaskConical,
      title: "Évaluation des compétences",
      description: "Analysez les réponses, identifiez les écarts et recevez des rapports détaillés avec des recommandations personnalisées. Chaque collaborateur bénéficie d'un retour immédiat et d'un plan d'action individuel.",
      benefits: [
        "Rapports détaillés avec recommandations",
        "Retour immédiat pour chaque collaborateur",
        "Plan d'action individuel personnalisé"
      ]
    },
    {
      icon: LayoutDashboard,
      title: "Gestion RH simplifiée",
      description: "Utilisez une bibliothèque de tests prêts à l'emploi, invitez vos équipes facilement et suivez leurs résultats en temps réel. Skillsio centralise les évaluations et simplifie le suivi global des performances.",
      benefits: [
        "Bibliothèque de tests prêts à l'emploi",
        "Invitation et suivi en temps réel",
        "Centralisation des évaluations"
      ]
    },
    {
      icon: Lock,
      title: "Expérience fluide et sécurisée",
      description: "Proposez un environnement d'évaluation clair, chronométré et protégé, avec sauvegarde automatique et suivi des progrès. L'interface est pensée pour offrir une expérience fluide, intuitive et sans friction.",
      benefits: [
        "Environnement clair et protégé",
        "Sauvegarde automatique des progrès",
        "Interface fluide et intuitive"
      ]
    },
    {
      icon: BarChart3,
      title: "Suivi post-formation",
      description: "Comparez les scores avant et après formation pour mesurer l'impact réel des dispositifs d'accompagnement (onboarding, formation, coaching, mentorat). Les résultats permettent d'objectiver la performance, de valider l'acquisition de compétences et d'ajuster les parcours de formation.",
      benefits: [
        "Comparaison avant/après formation",
        "Mesure d'impact des dispositifs d'accompagnement",
        "Validation et ajustement des parcours"
      ]
    },
    {
      icon: Brain,
      title: "Follow-Up intelligent",
      description: "Planifiez des relances et des suivis personnalisés après chaque évaluation ou formation. Les collaborateurs reçoivent des feedbacks ciblés, des micro-évaluations et des recommandations continues pour consolider leurs acquis et maintenir la progression dans le temps. Cette fonctionnalité au cœur de la technologie et de l'IA transforme le suivi post-accompagnement en apprentissage continu, garantissant un engagement durable et mesurable.",
      benefits: [
        "Relances automatisées personnalisées",
        "Feedbacks ciblés et micro-évaluations",
        "Apprentissage continu et engagement durable"
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-[#F1F8F5] to-teal-50/30 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div 
            ref={heroRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-teal-600/10 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-primary" strokeWidth={2} />
              <span className="text-sm font-semibold text-primary">Découvrez notre solution</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Une plateforme complète pour transformer vos évaluations
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Skillsio combine intelligence artificielle et expertise RH pour vous offrir une solution d'évaluation des compétences précise, rapide et personnalisée.
            </motion.p>
            
            <motion.button 
              onClick={openModal}
              className="inline-block bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Essayer Skillsio
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Fonctionnalités principales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour évaluer et développer les compétences de vos équipes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-primary/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2} />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Waiting List Section */}
      <WaitingListSection />
    </div>
  )
}

export default Produit
