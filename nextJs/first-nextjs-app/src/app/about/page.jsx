import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>Welcome to our company! We are a team of passionate professionals dedicated to providing the best services possible.</p>
            <Image src="/car.jpg" alt="About Us" width={1200} height={600} />
        </div>
    );
};

export default AboutPage;