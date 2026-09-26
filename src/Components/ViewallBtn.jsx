import React from 'react'

const ViewallBtn = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg border border-[var(--bg-primary)] bg-transparent text-[var(--bg-primary)] text-xs sm:text-sm font-semibold hover:bg-[var(--bg-primary)] hover:text-white transition-all duration-300">
            {text}
            <span>→</span>
        </button>
    )
}

export default ViewallBtn