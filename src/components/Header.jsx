import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'
  return (
    <div className="header bg-[black] flex max-md:flex-col max-sm:flex-col items-center justify-between px-[10rem] max-md:px-[2rem] max-sm:px-[0rem] pt-[2.4rem]">
        {/* logo */}
        <img src={require("../img/mlogo.png")} alt="" className='logo w-[52px] h-[52px]' />
        
        {/* side menu */}
        <CenterMenu/>
        {/* buttons */}
        <div className="buttons max-sm:mt-[-2rem] max-md:mt-[2rem] font-semibold">
            <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>Log in</button>
            <button className={buttonStyle + ` bg-[#232A4E]`}>Sign up</button>
        </div>
    </div>
  )
}

export default Header