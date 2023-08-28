import React from 'react'
import DownloadAds from './DownloadAds'

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] max-sm:px-[1rem] bg-[#020917] h-[48rem] max-sm:h-[45rem] pt-[18rem] mt-[-10rem]  relative z-[0] rounded-b-[5rem] max-sm:rounded-b-[3rem]">
      {/* tild icon or path icon */}
      <img src={require("../img/Path 318.png")} alt="" className='w-[5rem] max-sm:mt-[-3rem]' />
      {/* heading */}
      <div className="headline text-center mt-7 flex flex-col items-center text-[2rem]">
        <span>Download The Best Music</span>
        <span>
            <b>App now!</b>
        </span>
        <span className='text-[1rem] text-gray-400 md:px-[15rem] max-sm:px-[1rem] text-center mt-[1rem]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum non amet accusantium, nulla vero suscipit.
        </span>
        {/* download ads */}
        <div className='mt-14'>
            <DownloadAds />
        </div>
      </div>
    </div>
  )
}

export default Download
