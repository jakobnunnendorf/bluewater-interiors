"use client";
import React from "react";
import Image from "next/image";

function Hamburger({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  const src = isOpen
    ? "/images/nav-icons/close-burger.svg"
    : "/images/nav-icons/open-burger.svg";
  return (
    <button className="lg:hidden" onClick={toggleOpen}>
      <Image src={src} height={30} width={30} alt={src} />
    </button>
  );
}

export default Hamburger;
