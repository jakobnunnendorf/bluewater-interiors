import React from 'react';
import Link from "next/link";

function Navigation() {
    const links = [
        {name: "Home", link: "/"},
        {name: "About", link: "/about"},
        {name: "Services", link: "/services"},
        {name: "Portfolio", link: "/portfolio"},
        {name: "Contact", link: "/contact"},
    ]
    return (
            <nav className="w-1/2">
                <ul className="flex font-serif active:underline items-center justify-around align-baseline text-[#FDEBBD]  ">
                    {links.map(link => (
                        <li key={link.link}><Link href={link.link}>{link.name}</Link></li>
                    ))}
                </ul>
            </nav>
    );
}

export default Navigation;