import React from 'react'
import Feature from './Feature'

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] max-md:px-[0] bg-[black] h-[50rem] max-sm:h-[72rem] pt-[10rem] mt-[-5rem] relative z-[2] rounded-b-[5rem] max-sm:rounded-b-[3rem]">
        {/* title icon */}
        <img src={require("../img/Path 318.png")} alt="" className="w-[5rem] max-sm:mt-[-6rem]" />
        {/* heading */}
        <div className='headline mt-3 flex flex-col items-center text-[2rem]'>
            <span>
                <b>Music Experience</b>
            </span>
        </div>
        {/* features */}
        <div className='feature sm:flex items-center justify-around mt-[6rem] max-sm:mt-[0rem] w-[100%]'>
            <Feature icon="Group 2" title="For Live Music"/>
            <Feature icon="music icon" title="For Daily Music"/>
            <Feature icon="Group 4" title="For Artist"/>
        </div>
    </div>
  )
}

export default Experience
