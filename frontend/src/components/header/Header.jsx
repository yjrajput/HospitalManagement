import React, { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.png'
import userImage from '../../assets/images/avatar-icon.png'
import { BiMenu } from "react-icons/bi";
import { NavLink, Link} from 'react-router-dom'
const navlinks = [
    {
        path: '/home',
        display : 'Home'
    },
    {
        path: '/doctors',
        display : 'Find a Doctor'
    },
    {
        path: '/services',
        display : 'Services'
    },
    {
        path: '/contact',
        display : 'Contact'
    },
]

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    const toggleMenu = () =>{
        menuRef.current.classList.toggle('show_menu')
    }

    useEffect(() => {
        handleStickyHeader()

       return () =>  window.removeEventListener('scroll', handleStickyHeader)
    })

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ======logo===== */}
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>

          {/* =======menu======= */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
                {navlinks.map((link, index) => (
                    <li key={index}><NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]  ' : 'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'}>{link.display}</NavLink></li>
                ))}
            </ul>
          </div>

          {/* =======right side======= */}
        <div className='flex items-center gap-4'>
            <div className='hidden'>
                <Link to="/">
                    <figure className='w-[25px] h-[35px] rounded-full cursor-pointer'>
                        <img src={userImage} className='w-[full] rounded-full' alt="" />
                    </figure>
                </Link>
            </div>

            <Link to="/login">
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] cursor-pointer'>Login</button>
            </Link>


            <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
        </div>
        </div>


        
      </div>
    </header>

  )
}

export default Header
