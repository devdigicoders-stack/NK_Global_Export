import React from 'react'

const ReadmoreBtn = ({ bgcolor, radius, Text }) => {
    return (
        <>
            <button
                className={`${bgcolor} text-white px-3 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 ${radius} font-semibold text-[10px] sm:text-xs md:text-sm transition duration-300 hover:scale-95`}
            >
                {Text}&nbsp; ❯❯
            </button>
        </>
    )
}

export default ReadmoreBtn