import React from 'react';
import Image from "next/image"

function Introduction() {
    return (
        <div className="grid grid-cols-2 p-32">
            <figure>
                <Image src="/portrait.jpg" height={400} width={400} alt="test" className="mx-auto"/>
                <figcaption className="text-center">Dubai International Boat Show, 2024</figcaption>
            </figure>
            <div>
                <h2 className="text-3xl font-bold text-center pb-4">Presenting your craftsmanship <br/><span
                    className="font-medium">to the world is our Mission</span>
                </h2>
                <p>Hello my name is Jakob, I am a young, ambitious man studying Physics and Computer Science at Yale-NUS
                    College
                    in Singapore. As a lover of both boats, design and tech, I am proud to sit at the intersection
                    between
                    the three as the owner of BlueWater Interiors Agency. </p>
                <p>
                    At BlueWater Interiors, we understand the art and science of yacht interior design. Our mission is
                    to transform your creative vision into a stunning digital presence,
                    showcasing the elegance and sophistication of your work to a global audience. With a dedicated team
                    of web designers and developers who share a deep appreciation for
                    luxury and detail, we ensure that every project we undertake is a true reflection of your unique
                    style and quality craftsmanship.
                </p>
                <p>
                    Join us on this journey to elevate your brand and reach new heights. Let BlueWater Interiors be your
                    trusted partner in bringing your craftsmanship to the forefront of the
                    digital world. Together, we can create an online presence that truly represents the artistry and
                    luxury of your yacht interiors.
                </p>
                <p>
                    Thank you for considering BlueWater Interiors. We look forward to collaborating with you and helping
                    you shine in the world of yacht interior design.
                </p>
                <p>
                    Best regards,<br/>
                    Jakob<br/>
                    Owner, BlueWater Interiors Agency
                </p>
            </div>
        </div>
    );
}

export default Introduction;