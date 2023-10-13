import { React, useState} from 'react'
import MusicPlayer from './MusicPlayer'
import VisibilitySensor from 'react-visibility-sensor'
import {motion} from'framer-motion'

function Search() {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
          left: "-57rem",
        },
        false: {
          left: "-70rem",
        },
    };
    const redimg = {
        true: {
          left: "23rem",
        },
        false: {
          left: "21rem",
        },
    };
    const musicimg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "11rem",
    },
    };
    
  return (
        <div className="search relative h-[65rem] max-md:h-[58rem] px-[5rem] max-sm:px-[1.5rem] bg-[black] pt-[15rem] pb-[10rem] mt-[-15rem] z-[1] md:flex items-center justify-between rounded-b-[5rem] max-sm:rounded-b-[3rem]">
            {/* left side */}
            <div className="text flex-1 px-[5rem] max-sm:px-[0rem] max-md:invisible" >
                <motion.img
                    variants={bg}
                    animate={`${elementIsVisible}`}
                    transition={{
                        duration: 1,
                        type: "ease-out",
                    }}
                    src={require("../img/wave2.jpg")}
                    alt=""
                    className="absolute top-[5rem] left-[-42rem]"
                />
                 <motion.img
                    src={require("../img/d1.png")}
                    alt=""
                    className="w-[16rem] top-[26rem] absolute"
                />
                    <motion.img
                    src={require("../img/d2.png")}
                    alt=""
                    className="w-[9rem] absolute top-[32.7rem] left-[12rem]"
                />
                <motion.img
                    variants={redimg}
                    animate={`${elementIsVisible}`}
                    transition={{
                      duration: 1.2,
                      type: "ease-out",
                    }}
                    src={require("../img/d3.png")}
                    alt=""
                    className="w-[9rem] top-[33rem] left-[17rem] absolute"
                />
                <motion.img
                    variants={musicimg}
                    animate={`${elementIsVisible}`}
                    transition={{
                      duration: 1,
                      type: "ease-out",
                    }}
                    src={require("../img/d4.png")}
                    alt=""
                    className="w-[17rem] top-[50rem] left-[7rem] absolute"
                />
            </div>
            {/* right side */}
            <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] max-md:pt-[4rem] max-sm:pt-[3rem]">
                    {/* Search */}
                    <div className="searchbar flex justify-start w-[100%] ">
                        <input type='text'
                        placeholder='Enter the keyword or URL' className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]" />
                        {/* SearchIcon */}
                        <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                            <img src={require("../img/search.png")} alt="" className='w-[1.5rem]' />
                        </div>
                    </div>
                    {/* tild icon */}
                    <div className='tild flex justify-start mt-7 items-center w-[100%]'>
                        <img 
                            src={require("../img/Path 318.png")} 
                            alt=""
                            className='w-[5rem]' 
                        />
                    </div>

                    {/* paragraph */}
                    <div className='detail flex flex-col mt-5 text-4xl'>
                        <span>Search Music by</span>
                        <span>
                            <b>Name or Direct URL</b>
                        </span>
                        <span className='text-sm mt-3 text-[#4D586A]'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptatem reiciendis accusamus alias quibusdam? <br /> Lorem, ipsum.
                        </span>
                    </div>

                    {/* Music Plater */}
                    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}>
                        <MusicPlayer />
                    </VisibilitySensor>
                </div>
            </div>
  )
}

export default Search
