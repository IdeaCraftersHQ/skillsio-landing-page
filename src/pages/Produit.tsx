import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, LayoutDashboard, Users, BarChart3, CheckCircle, Sparkles } from 'lucide-react'
import DashboardIllustration from '../components/DashboardIllustration'
import SkillsIllustration from '../components/SkillsIllustration'
import WaitingListSection from '../components/WaitingListSection'

const Produit = () => {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Brain,
      title: "Évaluation intelligente des compétences",
      description: "Notre IA analyse en profondeur les réponses des candidats pour identifier les compétences réelles, détecter les écarts de performance et générer des rapports détaillés avec des recommandations personnalisées pour chaque profil.",
      illustration: <DashboardIllustration />
    },
    {
      icon: LayoutDashboard,
      title: "Gestion RH centralisée",
      description: "Accédez à une bibliothèque complète de tests prêts à l'emploi, invitez vos équipes en quelques clics et suivez leurs résultats en temps réel via un tableau de bord intuitif qui centralise toutes vos données RH.",
      illustration: <SkillsIllustration />
    },
    {
      icon: Users,
      title: "Expérience fluide",
      description: "Offrez à vos collaborateurs un environnement d'évaluation clair, chronométré et sécurisé. La sauvegarde automatique et le suivi des progrès garantissent une expérience utilisateur optimale à chaque étape du parcours.",
      illustration: <DashboardIllustration />
    },
    {
      icon: BarChart3,
      title: "Mesure de l'impact",
      description: "Comparez les scores avant et après formation pour mesurer l'impact réel de vos programmes de développement. Identifiez les progrès, renforcez les acquis et optimisez continuellement vos stratégies de formation.",
      illustration: <SkillsIllustration />
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-white via-[#F1F8F5]/30 to-teal-50/20 overflow-hidden">
        {/* Abstract geometric background */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-20 right-10 w-64 h-64 border-2 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-primary/5 to-teal-500/5 rounded-3xl rotate-12"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={heroRef}>
            {/* Left - Content */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-teal-600/10 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
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
                className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Skillsio combine intelligence artificielle et expertise RH pour vous offrir une solution d'évaluation des compétences précise, rapide et personnalisée. Découvrez comment notre plateforme peut révolutionner votre gestion des talents.
              </motion.p>
              
              <motion.a 
                href="#waiting-list"
                className="inline-block bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Essayer Skillsio
              </motion.a>
            </motion.div>

            {/* Right - Illustration */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <DashboardIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => {
        const FeatureSection = () => {
          const ref = useRef(null)
          const isInView = useInView(ref, { once: true, margin: "-100px" })
          const Icon = feature.icon
          const isEven = index % 2 === 0

          return (
            <section 
              key={index}
              className={`relative py-20 md:py-32 overflow-hidden ${
                isEven ? 'bg-white' : 'bg-gradient-to-br from-gray-50 via-white to-teal-50/30'
              }`}
            >
              {/* Decorative elements */}
              <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-teal-400/5 rounded-full blur-3xl"></div>

              <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
                  {/* Content */}
                  <motion.div
                    className={`space-y-6 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Illustration */}
                  <motion.div
                    className={`${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {feature.illustration}
                  </motion.div>
                </div>
              </div>
            </section>
          )
        }

        return <FeatureSection key={index} />
      })}

      {/* Waiting List Section */}
      <WaitingListSection />
    </div>
  )
}

export default Produit
