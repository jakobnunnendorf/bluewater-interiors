import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/#hero-section">
      <Image
        src="/images/blue-water-interiors.png"
        width={85}
        height={45}
        alt="Blue Interiors Logo"
      />
    </Link>
  );
}

export default Logo;
