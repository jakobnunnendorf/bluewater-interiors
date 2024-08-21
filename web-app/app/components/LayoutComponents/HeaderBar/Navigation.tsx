import Link from "next/link";

type Props = {
  hiddenNavStyles?: string;
};

const Navigation: React.FC<Props> = ({
  hiddenNavStyles = "hidden lg:block",
}) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about#about-page" },
    { name: "Services", link: "/services/#services-page" },
    { name: "Portfolio", link: "/portfolio/#portfolio-page" },
    // { name: "Contact", link: "/contact/#contact-page" },
  ];
  return (
    <nav className={hiddenNavStyles}>
      <ul
        className={`flex h-screen flex-col items-center justify-center font-gilroy-regular text-lg font-normal text-black lg:h-fit lg:w-[581px] lg:flex-row lg:justify-between`}
      >
        {links.map((link) => (
          <li className="" key={link.link}>
            <Link href={link.link}>
              <p className="underline-offset-4 duration-500 hover:scale-105 hover:underline">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
