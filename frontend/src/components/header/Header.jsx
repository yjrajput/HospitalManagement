import React, { useRef, useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

import userImage from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/VHLC.png";

const navlinks = [
  { path: "/home", display: "Home" },
  
  {
    path: "/speciality",
    display: "Speciality",
    submenu: [
      { path: "/speciality/cardiology", display: "Cardiac Sciences" },
      { path: "/speciality/neurology", display: "Neuro Sciences" },
      { path: "/speciality/orthopedics", display: "Gastro Sciences" },
      { path: "/speciality/orthopedics", display: "Orthopaedics" },
      { path: "/speciality/orthopedics", display: "Obstetrics & Gynaecology" },
      { path: "/speciality/orthopedics", display: "Renal Sciences" },
      { path: "/speciality/orthopedics", display: "General Surgery" },
      { path: "/speciality/orthopedics", display: "Dermatology & Cosmetology" },
      { path: "/speciality/orthopedics", display: "ENT, Neck & Head Surgery" },
      { path: "/speciality/orthopedics", display: "Internal Medicine" },
    ],
  },
  {
    path: "/services",
    display: "Services",
    submenu: [
      { path: "/services/consultation", display: "Book Appointment" },
      { path: "/services/diagnostics", display: "Book Virtual Consultation" },
      { path: "/services/emergency", display: "Book Radiology Appointment" },
      { path: "/services/emergency", display: "Book A Test" },
      { path: "/services/emergency", display: "Get A Preventive Health Check" },
    ],
  },
  {
    path: "/location",
    display: "Location",
    submenu: [
      { path: "/location/delhi", display: "Delhi" },
      { path: "/location/mumbai", display: "Mumbai" },
      { path: "/location/bangalore", display: "Bangalore" },
    ],
  },
  { path: "/doctors", display: "Doctor's" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMobileMenu((v) => !v);
  const closeAll = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };
  const toggleDropdown = (index) =>
    setOpenDropdown((prev) => (prev === index ? null : index));

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileMenu(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") closeAll();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="header flex items-center bg-white sticky top-0 z-[999] shadow-sm"
    >
      <div className="container hearder-container w-full px-4">
        <div className="flex items-center justify-between py-3">
         
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-20" />
          </Link>

          
          <nav className="hidden md:block">
            <ul className="nav-container flex items-center gap-8">
              {navlinks.map((link, i) => (
                <li key={i} className="relative">
                  {link.submenu ? (
                    <>
                      <div className="flex items-center gap-1">
                        <NavLink
                          to={link.path}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenu(false);
                          }}
                          className="text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                        >
                          {link.display}
                        </NavLink>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(i);
                          }}
                          aria-expanded={openDropdown === i}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          <FiChevronDown
                            className={`w-4 h-4 transform transition-transform duration-200 ${
                              openDropdown === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                     
                      <div
                        className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-52 overflow-hidden transition-all duration-300 ${
                          openDropdown === i
                            ? "max-h-[600px] opacity-100 pointer-events-auto"
                            : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <ul>
                          {link.submenu.map((sub, si) => (
                            <li key={si}>
                              <NavLink
                                to={sub.path}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2 text-sm text-textColor hover:bg-gray-100 hover:text-primaryColor"
                              >
                                {sub.display}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setOpenDropdown(null)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* right side */}
          <div className="flex items-center gap-4">
            <div className=" hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full overflow-hidden">
                  <img
                    src={userImage}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login" className="hidden md:block">
              <button className="bg-primaryColor cursor-pointer py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            
            <button
              onClick={toggleMenu}
              className="md:hidden cursor-pointer p-2 rounded hover:bg-gray-100"
              aria-expanded={mobileMenu}
              aria-label="Toggle menu"
            >
              <BiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeAll}
            aria-hidden
          />

        
          <aside className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" onClick={closeAll}>
                <img src={logo} alt="Logo" className="w-20" />
              </Link>
              <button
                onClick={closeAll}
                className="p-2 rounded hover:bg-gray-100"
                aria-label="Close menu"
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-2">
                {navlinks.map((link, i) => (
                  <li key={i} className="border-b last:border-b-0 pb-2">
                    {link.submenu ? (
                      <>
                        <div className="flex items-center justify-between">
                          <NavLink
                            to={link.path}
                            onClick={closeAll}
                            className="py-2 text-base font-[600] text-textColor hover:text-primaryColor"
                          >
                            {link.display}
                          </NavLink>

                          <button
                            onClick={() => toggleDropdown(i)}
                            className="p-2 rounded hover:bg-gray-100"
                            aria-expanded={openDropdown === i}
                          >
                            <FiChevronDown
                              className={`w-4 h-4 transform transition-transform duration-200 ${
                                openDropdown === i ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openDropdown === i ? "max-h-60 mt-2" : "max-h-0"
                          }`}
                        >
                          <ul className="flex flex-col">
                            {link.submenu.map((sub, si) => (
                              <li key={si}>
                                <NavLink
                                  to={sub.path}
                                  onClick={closeAll}
                                  className="block px-2 py-2 text-sm text-textColor hover:bg-gray-50"
                                >
                                  {sub.display}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={closeAll}
                        className="block py-3 text-base font-[600] text-textColor hover:text-primaryColor"
                      >
                        {link.display}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5">
              <Link to="/login" onClick={closeAll}>
                <button className="w-full h-[50px] flex justify-center items-center cursor-pointer bg-primaryColor  text-white font-[600] rounded-[50px]">
                  Login
                </button>
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
