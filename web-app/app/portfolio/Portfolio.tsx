import Image from "next/image";

const projects = [
  {
    title: "Lürssen Solandge",
    description: "Where luxury meets the horizon.",
    image: "/portfolio/pf1.png",
  },
  {
    title: "Nautical Elegance",
    description: "Where luxury meets the horizon.",
    image: "/portfolio/pf3.png",
  },
  {
    title: "Nautical Elegance Interior",
    description: "Where luxury meets the horizon.",
    image: "/portfolio/pf2.png",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Projects</h1>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:z-50 hover:scale-110"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
