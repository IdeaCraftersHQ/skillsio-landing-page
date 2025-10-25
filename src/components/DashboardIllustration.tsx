const DashboardIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* 3D-style dashboard mockup */}
      <div className="relative w-full max-w-md">
        {/* Main dashboard card */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <div>
                <div className="h-2 w-20 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Chart bars */}
          <div className="flex items-end justify-between gap-2 h-32 mb-4">
            <div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-lg animate-pulse" style={{ height: '60%', animationDelay: '0s' }}></div>
            <div className="flex-1 bg-gradient-to-t from-teal-600/80 to-teal-600/40 rounded-t-lg animate-pulse" style={{ height: '85%', animationDelay: '0.2s' }}></div>
            <div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-lg animate-pulse" style={{ height: '70%', animationDelay: '0.4s' }}></div>
            <div className="flex-1 bg-gradient-to-t from-teal-600/80 to-teal-600/40 rounded-t-lg animate-pulse" style={{ height: '95%', animationDelay: '0.6s' }}></div>
            <div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-lg animate-pulse" style={{ height: '75%', animationDelay: '0.8s' }}></div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-lg p-3">
              <div className="h-2 w-12 bg-primary/30 rounded mb-2"></div>
              <div className="h-3 w-16 bg-primary/50 rounded"></div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-primary/5 rounded-lg p-3">
              <div className="h-2 w-12 bg-teal-600/30 rounded mb-2"></div>
              <div className="h-3 w-16 bg-teal-600/50 rounded"></div>
            </div>
          </div>
        </div>

        {/* Floating AI badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-teal-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span className="text-sm font-semibold">IA</span>
        </div>

        {/* Floating growth indicator */}
        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <div>
            <div className="text-xs text-gray-500">Progression</div>
            <div className="text-sm font-bold text-green-600">+24%</div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 to-teal-500/5 rounded-3xl blur-2xl"></div>
      </div>
    </div>
  )
}

export default DashboardIllustration
