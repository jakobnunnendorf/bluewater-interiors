import React from 'react';

const services = [
    {
        title: 'Website Development',
        description: 'We create beautiful, responsive websites that reflect your brand and engage your audience. Our development process ensures your site is fast, secure, and easy to navigate.',
        icon: '🌐',
    },
    {
        title: 'SEO Optimization',
        description: 'Improve your website’s visibility on search engines with our SEO services. We use the latest techniques to help you rank higher and attract more organic traffic.',
        icon: '🔍',
    },
    {
        title: 'Digital Marketing',
        description: 'Our marketing strategies help you reach your target audience through various digital channels. We specialize in social media marketing, email campaigns, and PPC advertising.',
        icon: '📈',
    },
];

const Services: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
