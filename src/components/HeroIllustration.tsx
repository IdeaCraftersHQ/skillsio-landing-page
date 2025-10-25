import { motion } from 'framer-motion'

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Main analytics dashboard */}
      <motion.div 
        className="relative w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Primary card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
          {/* Header with AI badge */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <div className="h-3 w-32 bg-gray-300 rounded mb-2"></div>
                <div className="h-2 w-20 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="px-3 py-1 bg-gradient-to-r from-primary/10 to-teal-600/10 rounded-full">
              <span className="text-xs font-semibold text-primary">IA</span>
            </div>
          </div>

          {/* Analytics chart */}
          <div className="mb-6">
            <div className="flex items-end justify-between gap-3 h-40">
              <motion.div 
                className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-xl"
                initial={{ height: 0 }}
                animate={{ height: '55%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.div 
                className="flex-1 bg-gradient-to-t from-teal-600 to-teal-600/40 rounded-t-xl"
                initial={{ height: 0 }}
                animate={{ height: '75%' }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.div 
                className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-xl"
                initial={{ height: 0 }}
                animate={{ height: '90%' }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.div 
                className="flex-1 bg-gradient-to-t from-teal-600 to-teal-600/40 rounded-t-xl"
                initial={{ height: 0 }}
                animate={{ height: '65%' }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
              <motion.div 
                className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-xl"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.8, delay: 1.0 }}
              />
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-xl p-4">
              <div className="h-2 w-16 bg-primary/30 rounded mb-2"></div>
              <div className="h-4 w-12 bg-primary/50 rounded"></div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-primary/5 rounded-xl p-4">
              <div className="h-2 w-16 bg-teal-600/30 rounded mb-2"></div>
              <div className="h-4 w-12 bg-teal-600/50 rounded"></div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-emerald-50 rounded-xl p-4">
              <div className="h-2 w-16 bg-emerald-600/30 rounded mb-2"></div>
              <div className="h-4 w-12 bg-emerald-600/50 rounded"></div>
            </div>
          </div>
        </div>

        {/* Floating AI orb */}
        <motion.div 
          className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary to-teal-600 rounded-full shadow-xl flex items-center justify-center"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-teal-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
        </motion.div>

        {/* Floating success badge */}
        <motion.div 
          className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <div className="text-xs text-gray-500">Compétences</div>
            <div className="text-sm font-bold text-gray-900">Validées</div>
          </div>
        </motion.div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 -left-8 w-3 h-3 bg-primary/30 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-4 w-2 h-2 bg-teal-500/40 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Background glow */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  )
}

export default HeroIllustration
