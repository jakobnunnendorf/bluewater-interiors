"use client";

import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "@/app/LayoutComponents/HeaderBar/Hamburger";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const style = isOpen
    ? "translate-none"
    : "flex flex-col -translate-x-[110vw]";
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about#about-page" },
    { name: "Services", link: "/services/#services-page" },
    { name: "Portfolio", link: "/portfolio/#portfolio-page" },
    { name: "Contact", link: "/contact/#contact-page" },
  ];
  return (
    <nav className="col-start-1 row-start-1 mx-8 my-auto h-fit w-fit place-self-start md:w-1/2">
      <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
      <ul
        className={`${style} absolute flex h-[calc(100vh-112px)] w-[100vw] flex-col items-center justify-around bg-white font-serif text-[#FDEBBD] transition-transform duration-1000 md:static md:h-fit md:w-full md:translate-x-0 md:flex-row md:bg-transparent`}
      >
        {links.map((link) => (
          <li className="w-20" key={link.link}>
            <Link href={link.link}>
              <p className="underline-offset-4 transition-transform hover:scale-105 hover:underline">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
