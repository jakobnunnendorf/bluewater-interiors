"use client";

import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "@/app/LayoutComponents/HeaderBar/Hamburger";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const style = isOpen
    ? "flex flex-col -translate-x-[100vw]"
    : "translate-none";
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="col-start-1 row-start-1 h-fit w-fit md:w-1/2">
      <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
      <ul
        className={`absolute h-[calc(100vh-112px)] w-[100vw] transition-transform duration-1000 md:static md:h-fit md:w-full ${style} flex flex-col items-center justify-around font-serif text-[#FDEBBD] md:flex-row`}
      >
        {links.map((link) => (
          <li key={link.link}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
