import React from "react";
import Link from "next/link";
import Socials from "@/app/LayoutComponents/Hero/HeroText/Socials";

function Footer() {
  return (
    <footer className="relative top-28 bg-gray-900 py-10 text-gray-100 md:static">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-bold">About Us</h3>
          <p className="text-sm">
            We are dedicated to providing the best services for yacht interior
            designers. Our team is committed to ensuring your satisfaction and
            creating a beautiful space for you.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative">
          <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
          <p className="mb-2 text-sm">
            Email:{" "}
            <Link href="mailto:info@example.com" className="hover:underline">
              jnunnendorf@icloud.com
            </Link>
          </p>
          <p className="mb-2 text-sm">
            Phone:{" "}
            <Link href="tel:+1234567890" className="hover:underline">
              +65 842 505 80
            </Link>
          </p>
        </div>
      </div>
      <div className="relative mx-auto h-full w-full py-8 md:w-fit">
        <Socials />
      </div>
      <div className="border-t border-gray-800 text-center text-sm">
        &copy; {new Date().getFullYear()} BlueWater Interiors Agency. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
