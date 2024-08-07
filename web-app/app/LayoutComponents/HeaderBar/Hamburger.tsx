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
    ? "/nav icons/close burger.png"
    : "/nav icons/open burger.png";
  return (
    <button className="md:hidden" onClick={toggleOpen}>
      <Image src={src} height={40} width={40} alt={src} />
    </button>
  );
}

export default Hamburger;
