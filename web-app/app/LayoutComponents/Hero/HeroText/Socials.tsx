import Image from "next/image";
import Link from "next/link";

const dir = "/social-icons/";

const socialLinks = [
  {
    src: "Facebook.png",
    alt: "Facebook button",
    color: "#1974EF",
    url: "https://www.facebook.com/profile.php?id=100070153217563",
  },
  {
    src: "Instagram.png",
    alt: "Instagram button",
    color: "black",
    url: "https://www.instagram.com/jakobnunnendorf",
  },
  {
    src: "LinkedIn.png",
    alt: "LinkedIn button",
    color: "#0A66C2",
    url: "https://www.linkedin.com/in/jakobnunnendorf",
  },
  {
    src: "WhatsApp.png",
    alt: "WhatsApp button",
    color: "#4AC859",
    url: "https://wa.me/6584250580",
  },
  {
    src: "X.png",
    alt: "Twitter button",
    color: "white",
    url: "https://x.com/jakobnunnendorf",
  },
  {
    src: "YouTube.png",
    alt: "YouTube button",
    color: "#FE0000",
    url: "https://www.youtube.com/channel/UC_0A1bflBqq7thCJs8kjWHg",
  },
];

const SocialIcons = () => (
  <ul className="absolute bottom-20 right-0 z-10 ml-auto mr-0 hidden w-1/2 justify-end gap-12 px-16 md:flex">
    {socialLinks.map((link, index) => (
      <li
        key={index}
        className={`aspect-square w-fit p-2 bg-[${link.color}] flex items-center justify-center rounded-xl`}
      >
        <Link href={link.url} passHref>
          <Image src={dir + link.src} height={30} width={30} alt={link.alt} />
        </Link>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
