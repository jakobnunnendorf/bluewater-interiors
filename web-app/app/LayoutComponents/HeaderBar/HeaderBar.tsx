import React from "react";
import Logo from "@/app/LayoutComponents/HeaderBar/Logo";
import Navigation from "@/app/LayoutComponents/HeaderBar/Navigation";

function HeaderBar() {
  return (
    <header className="fixed top-0 z-50 grid h-28 w-full grid-cols-3 items-center justify-between bg-white md:flex md:h-40 md:bg-none md:p-4 md:px-8">
      <Logo />
      <Navigation />
    </header>
  );
}

export default HeaderBar;
