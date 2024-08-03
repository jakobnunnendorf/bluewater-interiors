import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About BlueWater Interiors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
                <figure className="flex flex-col items-center">
                    <Image src="/portrait.jpg" height={400} width={400} alt="Dubai International Boat Show, 2024" className="rounded-lg shadow-md"/>
                    <figcaption className="text-center mt-4">Dubai International Boat Show, 2024</figcaption>
                </figure>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-center pb-4">Presenting your craftsmanship <br/><span className="font-medium">to the world is our Mission</span></h2>
                    <p>Hello, my name is Jakob. I am a young, ambitious man studying Physics and Computer Science at Yale-NUS College in Singapore. As a lover of boats, design, and tech, I am proud to sit at the intersection of these passions as the owner of BlueWater Interiors Agency.</p>
                    <p>At BlueWater Interiors, we understand the art and science of yacht interior design. Our mission is to transform your creative vision into a stunning digital presence, showcasing the elegance and sophistication of your work to a global audience. With a dedicated team of web designers and developers who share a deep appreciation for luxury and detail, we ensure that every project we undertake is a true reflection of your unique style and quality craftsmanship.</p>
                    <p>Our services include:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Website Development:</strong> We create websites specifically tailored to yacht interior designers, ensuring your work is beautifully showcased.</li>
                        <li><strong>SEO Optimization:</strong> Improve your website’s visibility on search engines to attract more organic traffic and potential clients.</li>
                        <li><strong>Social Media Marketing:</strong> Reach a wider audience through effective social media strategies and campaigns.</li>
                    </ul>
                    <p>Join us on this journey to elevate your brand and reach new heights. Let BlueWater Interiors be your trusted partner in bringing your craftsmanship to the forefront of the digital world. Together, we can create an online presence that truly represents the artistry and luxury of your yacht interiors.</p>
                    <p>Thank you for considering BlueWater Interiors. We look forward to collaborating with you and helping you shine in the world of yacht interior design.</p>
                    <p>Best regards,<br/>Jakob<br/>Owner, BlueWater Interiors Agency</p>
                </div>
            </div>
        </div>
    );
};

export default About;
