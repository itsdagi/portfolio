import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-ds-primary-bg/90 backdrop-blur-md border-b border-ds-secondary-bg/30" : "bg-transparent" 
      } transition-all duration-300 ease-in-out`} // Added glassmorphism, border, and transition for nav
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 p-2 rounded-lg' // Removed background from logo link container
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-ds-text-primary text-[18px] font-bold cursor-pointer flex'> {/* Updated logo text */}
            Dagim &nbsp;
            <span className='sm:block hidden'> | Data Scientist</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-ds-accent font-semibold" : "text-ds-text-primary font-medium"
              } hover:text-ds-highlight text-[18px] cursor-pointer p-2 rounded-lg transition-colors duration-300 ease-in-out`} // Removed individual link background, added transitions and active font weight
              onClick={() => setActive(nav.title)}
            >
              {nav.external ? (
                <a
                  href={nav.link}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-ds-secondary-bg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} // Updated mobile menu background
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 p-4 rounded-lg'> {/* Removed redundant background */}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-ds-accent font-semibold" : "text-ds-text-primary font-medium"
                  } font-poppins cursor-pointer text-[16px] hover:text-ds-highlight bg-ds-primary-bg p-2 rounded-lg transition-colors duration-300 ease-in-out`} // Added transition and active font weight to mobile links
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.external ? (
                    <a
                      href={nav.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
