"use client";

import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "@/app/LayoutComponents/HeaderBar/Hamburger";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const style = isOpen
    ? "translate-none"
    : "flex flex-col -translate-x-[100vw]";
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="col-start-1 row-start-1 mx-8 my-auto h-fit w-fit place-self-start md:w-1/2">
      <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
      <ul
        className={`${style} absolute flex h-[calc(100vh-112px)] w-[100vw] flex-col items-center justify-around bg-white font-serif text-[#FDEBBD] transition-transform duration-1000 md:static md:h-fit md:w-full md:translate-x-0 md:flex-row md:bg-transparent`}
      >
        {links.map((link) => (
          <li className="" key={link.link}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
