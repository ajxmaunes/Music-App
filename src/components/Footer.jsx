import React from 'react'
import CenterMenu from './CenterMenu'
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons"

function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[2rem] ml-[2rem] max-sm:mr-[1rem] max-sm:ml-[1rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] max-sm:px-[0rem] bg-[#081730] h-[35rem] max-sm:h-[30rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        {/* <CenterMenu /> */}
        {/* Social Icons */}
        <div className='flex w-[100%] justify-center max-sm:mt-[-4rem]'>
            <div className={SocialStyle}>
                <Facebook />
            </div>
            <div className={SocialStyle}>
                <Twitter />
            </div>
            <div className={SocialStyle}>
                <YouTube />
            </div>
            <div className={SocialStyle}>
                <LinkedIn />
            </div>
        </div>
        {/* Details */}
            <span className="text-[1rem] text-gray-400 px-[15rem] max-sm:px-[1rem] text-center mt-[4rem]">   
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dolore aspernatur natus magnam, doloremque sequi fuga.
            </span>
        
    </div>
  )
}

export default Footer
