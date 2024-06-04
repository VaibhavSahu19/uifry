import React, { useState } from 'react'

function Header() {
    const [menu, setMenu] = useState(true);

    function changeMenu(){
        setMenu(!menu);
    }

  return (
    <nav className='flex px-[40px] py-[30px] justify-between items-center'>
        <div className='flex justify-center items-center gap-[30px]'>
            <div className='flex justify-center items-center gap-[8px]'>
                <img className='h-[34px] w-[34px]' src="/Images/logo.png" alt="logo" />
                    <h2 className='text-[26px] font-bold flex justify-start items-center'>uifry <span className='text-[12px]'>&#8482;</span></h2>
            </div>
            <ul className='hidden md:flex text-[20px] justify-center items-center gap-[20px]'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
            </ul>
        </div>
        <div className='flex justify-center items-center gap-[20px] relative'>
            <div className='text-[15px]'>
                <a className='bg-black text-white px-[40px] py-[15px] rounded-[8px]' href="">Download</a>
            </div>
            <div onClick={changeMenu} className='flex md:hidden h-[30px] w-[30px] cursor-pointer'>
                <img className={menu ? `block` : `hidden`} src="/Images/menu.svg" alt="menu-open" />
                <img className={menu ? `hidden` : `block`} src="/Images/menu-close.svg" alt="menu-close" />
            </div>
            <ul className={`flex flex-col md:hidden text-[20px] justify-center items-center gap-[20px] bg-[whitesmoke] px-[20px] py-[20px] rounded-[8px] ${!menu ? 'absolute top-[50px] flex' : 'hidden'}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header