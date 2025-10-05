import React from 'react'

function SectionHeader({number, title}) {
  return (
    <h1 className="flex flex-row gap-3 font-bold text-3xl items-center ml-2 mt-5">
        <span className="border-4 py-4 px-3 bg-black text-white pr-2 mb-5">{number}</span>
               {title}
     </h1>  
    
  )
}

export default SectionHeader