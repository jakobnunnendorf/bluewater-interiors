import Image from 'next/image';

const projects = [
    {
        title: 'Lürssen Solandge',
        description: 'Where luxury meets the horizon.',
        image: '/pf1.png',
    },
    {
        title: 'Nautical Elegance',
        description: 'Where luxury meets the horizon.',
        image: '/pf2.png',
    },
    {
        title: 'Nautical Elegance Interior',
        description: 'Where luxury meets the horizon.',
        image: '/pf3.png',
    },
];

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative w-full h-64">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
