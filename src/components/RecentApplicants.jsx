import React from 'react'

const RecentApplicants = () => {
  const applicants = [
    { 
      initials: 'BS', 
      name: 'Bhanu Sharma', 
      status: 'Interview', 
      action: 'view'
    },
    { 
      initials: 'RK', 
      name: 'Rahul Kumawat', 
      status: 'Hired', 
      action: 'view'
    },
    { 
      initials: 'SK', 
      name: 'Sunil Kumawat', 
      status: 'Review', 
      action: 'view'
    },
    { 
      initials: 'JS', 
      name: 'Jayant Singh', 
      status: 'Interview', 
      action: 'view'
    },
    { 
      initials: 'DK', 
      name: 'Dinesh Kumar', 
      status: 'Review', 
      action: 'view'
    },
  ]

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Interview': { backgroundColor: 'rgba(6, 182, 212, 0.2)', color: '#22d3ee', borderColor: 'rgba(6, 182, 212, 0.3)' },
      'Hired': { backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.3)' },
      'Review': { backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', borderColor: 'rgba(139, 92, 246, 0.3)' },
    }
    const style = statusStyles[status] || { backgroundColor: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', borderColor: 'rgba(139, 92, 246, 0.3)' }
    return (
      <span className="px-3 py-1 rounded-full text-xs font-medium border" style={style}>
        {status}
      </span>
    )
  }

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
      <div className="p-4 sm:p-6 border-b border-white/10">
        <h2 className="text-white text-lg sm:text-xl font-bold mb-1">Recent Applicants</h2>
        <p className="text-gray-400 text-xs sm:text-sm">Latest candidate submissions</p>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block">
        {/* Table Header */}
        <div className="bg-white/5 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 grid grid-cols-3 gap-4">
          <div className="text-gray-400 text-xs font-medium uppercase">Name</div>
          <div className="text-gray-400 text-xs font-medium uppercase">Status</div>
          <div className="text-gray-400 text-xs font-medium uppercase text-right">Action</div>
        </div>

        {/* Table Rows */}
        <div>
          {applicants.map((applicant, index) => (
            <div 
              key={index}
              className={`px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-3 gap-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors ${
                index < applicants.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }}>
                  <span className="text-white font-semibold text-xs sm:text-sm">{applicant.initials}</span>
                </div>
                <span className="text-white font-medium text-xs sm:text-sm truncate">{applicant.name}</span>
              </div>
              <div>
                {getStatusBadge(applicant.status)}
              </div>
              <div className="flex justify-end">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden divide-y divide-white/5">
        {applicants.map((applicant, index) => (
          <div 
            key={index}
            className="p-4 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }}>
                  <span className="text-white font-semibold text-sm">{applicant.initials}</span>
                </div>
                <span className="text-white font-medium text-sm truncate">{applicant.name}</span>
              </div>
              <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            <div>
              {getStatusBadge(applicant.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentApplicants
