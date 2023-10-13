import React, { useState } from "react";
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FcMusic } from 'react-icons/fc';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";

const LoginForm = () => {

    return (
        <section className="page h-[100vh] w-[100%] flex flex-col justify-center items-center text-[0.75rem] m-0 box-border bg-black">
            <Link to="/"><img src={require("../img/mlogo.png")} alt="" className='logo w-[52px] h-[52px] mb-[4rem] mt-[-4rem]' /></Link>
                <div className="cover w-[90%] h-[420px] py-4 relative rounded-[1rem] flex flex-col items-center justify-around border-[2px] border-[#232A4E] md:w-[40%]">
                    <h1 className="text-[2rem] text-white flex items-center"><FcMusic className="mt-1 mx-2 text-[20px]"/>Log In<FcMusic className="mt-1 mx-2 text-[20px]"/></h1>
                    <input name="email" className="text-white bg-black w-[80%] border-[2px] border-[#232A4E] rounded-[0.25rem] text-center p-[10px] text-[1rem]" type="text" placeholder="username" />
                    <input name="password" className="text-white bg-black w-[80%] border-[2px] border-[#232A4E] rounded-[0.25rem] text-center p-[10px] text-[1rem]" type="password" placeholder="password" />

                    <button className="text-white text-[1rem] rounded-[10px] w-[30%] py-[7px] bg-[#D04E4E] font-[500]">LOGIN</button>

                    <p className="textLog relative b-[0.5%] text-[1rem] text-white">Or login using</p>

                    <div className="alt-login h-[3rem] flex justify-around items-center">
                        <BsFacebook color="#0866ff" className="text-[1.9rem] mx-5 cursor-pointer text-blue"/>
                        <FcGoogle className="text-[2rem] mx-5 cursor-pointer" />
                    </div>
                <Link to="/" className="text-[#D04E4E] flex text-[16px] items-center"><IoIosArrowBack />Back Home</Link>
            </div>
    </section>
    )
}

export default LoginForm