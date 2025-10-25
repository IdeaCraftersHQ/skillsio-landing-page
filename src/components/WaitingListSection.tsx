import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Sparkles } from 'lucide-react'

const WaitingListSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    
    setSubmitted(true)
    setEmail('')
    
    // Reset the message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

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
          <div className="relative bg-[#F1F8F5] rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border-2 border-primary/20 overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                Rejoignez les premiers utilisateurs de Skillsio
              </h2>
              
              <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour être parmi les premiers à découvrir Skillsio
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email" 
                    required
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all shadow-md border border-gray-200"
                  />
                  <motion.button 
                    type="submit"
                    className="bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Rejoindre la liste d'attente
                  </motion.button>
                </div>
                
                {submitted && (
                  <motion.p 
                    className="mt-4 text-primary text-sm font-medium flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Merci ! Nous vous contacterons bientôt.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WaitingListSection
