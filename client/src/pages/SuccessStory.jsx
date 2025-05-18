import { useState, useEffect } from 'react';
import { PlacementSlider } from '../components/sliders/PeopleSlider'
import { HiringCompanies } from './Home'
import { Link } from 'react-router-dom'

const SuccessStory = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Responsive button classes based on screen size
    const getButtonClasses = (isBottom = false) => {
        let baseClasses = 'bg-purple-500 rounded-lg text-white';

        if (windowWidth >= 1024) { // Large screens
            return `${baseClasses} ${isBottom ? 'py-2' : 'py-5'} text-2xl px-10`;
        } else if (windowWidth >= 768) { // Medium screens
            return `${baseClasses} py-3 text-xl px-8`;
        } else { // Small screens
            return `${baseClasses} py-2 text-lg px-6`;
        }
    };

    // Responsive container for images
    const imageContainerClasses = 'flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-12';

    return (
        <div className="w-full overflow-hidden">
            {/* Hero section with responsive button positioning */}
            <div className="relative w-full">
                <div className={imageContainerClasses}>
                    <img
                        src="./images/successtory1.svg"
                        alt="Success Story"
                        draggable="false"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
                <div className="absolute bottom-4 md:bottom-8 lg:bottom-15 left-0 right-0 flex justify-center">
                    <Link to="/contact">
                        <button className={getButtonClasses()}>Contact Us</button>
                    </Link>
                </div>
            </div>

            {/* Placement slider section */}
            <section className="my-10 md:my-16 lg:my-20">
                <PlacementSlider />
            </section>

            {/* Hiring companies section */}
            <section className="my-10 md:my-16 lg:my-20">
                <HiringCompanies />
            </section>

            {/* Success story image sections */}
            <section className={`${imageContainerClasses} my-10 md:my-20 lg:my-30`}>
                <img
                    src="./images/successtory2.svg"
                    alt="Success Story"
                    draggable="false"
                    loading="lazy"
                    className="w-full"
                />
            </section>

            <section className={`${imageContainerClasses} my-10 md:my-20 lg:my-30`}>
                <img
                    src="./images/ss3.svg"
                    alt="Success Story"
                    draggable="false"
                    loading="lazy"
                    className="w-full"
                />
            </section>

            <section className={`${imageContainerClasses} my-10 md:my-20 lg:my-30`}>
                <img
                    src="./images/ss4.svg"
                    alt="Success Story"
                    draggable="false"
                    loading="lazy"
                    className="w-full"
                />
            </section>

            <section className={`${imageContainerClasses} my-10 md:my-20 lg:my-30`}>
                <img
                    src="./images/ss5.svg"
                    alt="Success Story"
                    draggable="false"
                    loading="lazy"
                    className="w-full"
                />
            </section>

            <section className={`${imageContainerClasses} my-10 md:my-20 lg:my-30`}>
                <img
                    src="./images/ss6.svg"
                    alt="Success Story"
                    draggable="false"
                    loading="lazy"
                    className="w-full"
                />
            </section>

            {/* Final section with button */}
            <section className="relative w-full my-10 md:my-20 lg:my-30">
                <div className={imageContainerClasses}>
                    <img
                        src="./images/ss7.svg"
                        alt="Success Story"
                        draggable="false"
                        loading="lazy"
                        className="w-full"
                    />
                </div>
                <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 flex justify-center">
                    <Link to="/contact">
                        <button className={getButtonClasses(true)}>Contact Us</button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default SuccessStory