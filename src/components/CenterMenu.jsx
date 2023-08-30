import React from 'react'

function CenterMenu() {
    const liStyle = "transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 mr-[3rem] hover:cursor-pointer max-md:text-xl hover:text-[#FF6969]"
  return (
    <div className="menu flex max-sm:invisible max-md:mt-[2rem] max-md:ml-[3rem]">
        <ul className='flex w-[100%] justify-between font-semibold '>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>About</li>
            <li className={liStyle}>Performer</li>
            <li className={liStyle}>Event Schedule</li>
        </ul>
    </div>
  )
}

export default CenterMenu
