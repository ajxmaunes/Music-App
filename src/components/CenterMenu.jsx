import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer max-md:text-xl"
  return (
    <div className="menu flex max-sm:invisible max-md:mt-[2rem] max-md:ml-[3rem]">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>About</li>
            <li className={liStyle}>Performer</li>
            <li className={liStyle}>Event Schedule</li>
        </ul>
    </div>
  )
}

export default CenterMenu
