import React from "react";

const services = [
  {
    title: "Website Development",
    description:
      "We create beautiful, responsive websites that reflect your brand and engage your audience. Our development process ensures your site is fast, secure, and easy to navigate.",
    icon: "🌐",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website’s visibility on search engines with our SEO services. We use the latest techniques to help you rank higher and attract more organic traffic.",
    icon: "🔍",
  },
  {
    title: "Digital Marketing",
    description:
      "Our marketing strategies help you reach your target audience through various digital channels. We specialize in social media marketing, email campaigns, and PPC advertising.",
    icon: "📈",
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 pb-16 pt-32">
      <h1 className="mb-8 text-4xl font-bold">Our Services</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 text-center shadow-md"
          >
            <div className="mb-4 text-5xl">{service.icon}</div>
            <h2 className="mb-2 text-2xl font-bold">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
