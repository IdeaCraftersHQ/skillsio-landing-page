const SkillsIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Skills assessment visualization */}
      <div className="relative w-full max-w-md">
        {/* Main card */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <div className="h-2 w-24 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Skill bars */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="h-2 w-16 bg-gray-300 rounded inline-block"></span>
                <span className="h-2 w-8 bg-gray-200 rounded inline-block"></span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-teal-600 rounded-full animate-pulse" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="h-2 w-20 bg-gray-300 rounded inline-block"></span>
                <span className="h-2 w-8 bg-gray-200 rounded inline-block"></span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-600 to-primary rounded-full animate-pulse" style={{ width: '72%', animationDelay: '0.2s' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="h-2 w-18 bg-gray-300 rounded inline-block"></span>
                <span className="h-2 w-8 bg-gray-200 rounded inline-block"></span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-teal-600 rounded-full animate-pulse" style={{ width: '93%', animationDelay: '0.4s' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span className="h-2 w-16 bg-gray-300 rounded inline-block"></span>
                <span className="h-2 w-8 bg-gray-200 rounded inline-block"></span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-600 to-primary rounded-full animate-pulse" style={{ width: '68%', animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <div className="flex-1 h-8 bg-gradient-to-r from-primary/10 to-teal-600/10 rounded-lg"></div>
            <div className="flex-1 h-8 bg-gradient-to-r from-teal-600/10 to-primary/10 rounded-lg"></div>
          </div>
        </div>

        {/* Floating checkmark badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-3 rounded-full shadow-lg animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Floating score indicator */}
        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </div>
          <div>
            <div className="text-xs text-gray-500">Score</div>
            <div className="text-sm font-bold text-primary">8.5/10</div>
          </div>
        </div>

        {/* Background decorative element */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-teal-500/5 to-primary/5 rounded-3xl blur-2xl"></div>
      </div>
    </div>
  )
}

export default SkillsIllustration
