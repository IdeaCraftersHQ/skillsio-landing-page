import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useContext } from 'react'
import { Brain, LayoutDashboard, Users, BarChart3, CheckCircle, Sparkles, Zap, Shield, TrendingUp, Target } from 'lucide-react'
import WaitingListSection from '../components/WaitingListSection'
import { WishlistModalContext } from '../App'

const Produit = () => {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const { openModal } = useContext(WishlistModalContext)

  const mainFeatures = [
    {
      icon: Brain,
      title: "Évaluation intelligente des compétences",
      description: "Notre IA analyse en profondeur les réponses des candidats pour identifier les compétences réelles, détecter les écarts de performance et générer des rapports détaillés avec des recommandations personnalisées pour chaque profil.",
      benefits: [
        "Analyse IA en temps réel",
        "Rapports détaillés automatiques",
        "Recommandations personnalisées"
      ]
    },
    {
      icon: LayoutDashboard,
      title: "Gestion RH centralisée",
      description: "Accédez à une bibliothèque complète de tests prêts à l'emploi, invitez vos équipes en quelques clics et suivez leurs résultats en temps réel via un tableau de bord intuitif qui centralise toutes vos données RH.",
      benefits: [
        "Bibliothèque de tests complète",
        "Invitation en un clic",
        "Suivi en temps réel"
      ]
    },
    {
      icon: Users,
      title: "Expérience fluide",
      description: "Offrez à vos collaborateurs un environnement d'évaluation clair, chronométré et sécurisé. La sauvegarde automatique et le suivi des progrès garantissent une expérience utilisateur optimale à chaque étape du parcours.",
      benefits: [
        "Interface intuitive",
        "Sauvegarde automatique",
        "Environnement sécurisé"
      ]
    },
    {
      icon: BarChart3,
      title: "Mesure de l'impact",
      description: "Comparez les scores avant et après formation pour mesurer l'impact réel de vos programmes de développement. Identifiez les progrès, renforcez les acquis et optimisez continuellement vos stratégies de formation.",
      benefits: [
        "Comparaison avant/après",
        "Suivi des progrès",
        "Optimisation continue"
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Déploiement rapide",
      description: "Mise en place en quelques minutes"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Données cryptées et conformes RGPD"
    },
    {
      icon: TrendingUp,
      title: "Évolutif",
      description: "S'adapte à la croissance de votre entreprise"
    },
    {
      icon: Target,
      title: "Précision maximale",
      description: "Résultats fiables et validés"
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

      {/* Additional Features */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-emerald-400/5 to-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir Skillsio ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
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
