"use client";
import Logo from "@/app/components/LayoutComponents/HeaderBar/Logo";
import Navigation from "@/app/components/LayoutComponents/HeaderBar/Navigation";
import { useState } from "react";
import Button from "../../UI/Button";
import Hamburger from "./Hamburger";
import Drawer from "../../UI/Drawer";

function HeaderBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <header className="container sticky top-0 z-50 flex w-full items-center justify-between py-4">
        <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        <Logo />
        <Navigation />
        <Button name="Contact Us" onClick={() => {}} />
      </header>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Navigation hiddenNavStyles="" />
      </Drawer>
    </>
  );
}

export default HeaderBar;
