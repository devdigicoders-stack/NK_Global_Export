import React from 'react'

const ReadmoreBtn = ({ bgcolor, Text }) => {
    return (
        <>
            <button
                className={`${bgcolor} text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-103 hover:shadow-md`}
            >
                {Text} <span className="ml-1">→</span>
            </button>
        </>
    )
}

export default ReadmoreBtn