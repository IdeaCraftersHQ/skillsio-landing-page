import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, CheckCircle, Sparkles } from 'lucide-react'
import WaveDivider from './WaveDivider'
import DashboardIllustration from './DashboardIllustration'

const SolutionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="solution" className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-teal-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Title */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Target className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent max-w-4xl mx-auto">
            Une plateforme unique pour évaluer, suivre et développer les compétences.
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* First paragraph with icon */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Skillsio est une plateforme d'évaluation des compétences alimentée par l'IA, conçue pour aider les entreprises et les individus à mesurer les compétences réelles, détecter les écarts et recommander des formations ciblées.
              </p>
            </div>

            {/* Second paragraph with icon */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                De la pré-évaluation avant formation à la mesure des progrès après formation, Skillsio fournit des données claires et exploitables pour transformer la formation en véritable performance.
              </p>
            </div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <DashboardIllustration />
          </motion.div>
        </div>
        
        {/* Value Proposition - Highlighted Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative bg-[#F1F8F5] rounded-3xl p-8 md:p-12 shadow-lg border-2 border-primary/20 hover:shadow-xl transition-shadow duration-300">
            {/* Decorative sparkle */}
            <div className="absolute top-6 right-6">
              <Sparkles className="w-8 h-8 text-primary/30" strokeWidth={1.5} />
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                Ce qui rend skillsio unique
              </h3>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Skillsio comble le fossé entre les compétences acquises et celles réellement requises.
                Grâce à des évaluations précises, des rapports personnalisés et un suivi post-formation, la plateforme aide chaque individu et chaque organisation à mesurer les progrès et à développer les talents de façon ciblée.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-gray-50">
        <WaveDivider />
      </div>
    </section>
  )
}

export default SolutionSection
