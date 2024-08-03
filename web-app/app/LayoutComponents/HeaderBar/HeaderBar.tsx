import React from 'react';
import Logo from "@/app/LayoutComponents/HeaderBar/Logo";
import Navigation from "@/app/LayoutComponents/HeaderBar/Navigation";

function HeaderBar() {
    return (
        <header className="z-50 p-4 w-full fixed top-0 flex justify-between items-center px-8 h-40">
            <Logo/>
            <Navigation/>
        </header>
    );
}

export default HeaderBar;