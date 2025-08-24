import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  const solialLink = [
  {
    path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://github.com/yjrajput',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://www.instagram.com/yuvrajjj_rathore?igsh=dGZ3cTE2Z2JmNnho',
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: 'https://www.linkedin.com/in/yuvraj-rathore-a85514311/',
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
  },
];

  const quickList01 = [
    {
      path: '/home',
      display: 'Home',
    },
    {
      path: '/',
      display: 'About Us',
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: '/',
      display: "Blog",
    }
  ];

  const quickList02 = [
    {
      path: '/find-a-doctor',
      display: 'Find a Doctor',
    },
    {
      path: '/',
      display: 'Request an Appointment',
    },
    {
      path: '/',
      display: 'Find a Location',
    },
    {
      path: '/',
      display: 'Get a Opinion',
    }
  ];

  const quickList03 = [
    {
      path: '/',
      display: 'Donate',
    },
    {
      path: '/contact',
      display: 'Contact Us',
    }
  ];

  const year = new Date().getFullYear();

  return (
    <footer className='pb-16 pt-10'>
        <div className='container'>
            <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
                <div>
                  <img src={logo} alt="" />
                  <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                    Copyright © {year} developed by Yuvraj Singh Rathore 
                  </p>

                  <div className='flex items-center gap-3 mt-4'>
                      {solialLink.map((items,index) => (
                        <Link to={items.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{items.icon}</Link>
                      ))}
                  </div>
                </div>

              <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
                Quick Links
              </h2>

              <ul>
                {quickList01.map((links, index) => (
                  <li key={index} className='mb-4 '>
                    <Link to={links.path} className='text-[16px] leading-7 font-[400] text-textColor'>{links.display}</Link>
                  </li>
                ))}
              </ul>
            </div>


             <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
                I want to:
              </h2>

              <ul>
                {quickList02.map((links, index) => (
                  <li key={index} className='mb-4 '>
                    <Link to={links.path} className='text-[16px] leading-7 font-[400] text-textColor'>{links.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

             <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor '>
                Support
              </h2>

              <ul>
                {quickList03.map((links, index) => (
                  <li key={index} className='mb-4 '>
                    <Link to={links.path} className='text-[16px] leading-7 font-[400] text-textColor'>{links.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
            </div>

          
        </div>
    </footer>
  )
}

export default Footer
