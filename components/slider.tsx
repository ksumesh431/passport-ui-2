'use client';
import { useState, useEffect } from "react";
import { FaUsers, FaShieldAlt, FaHandshake, FaTasks, FaGlobe, FaStar, FaLock, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Carousel = () => {
    const cards = [
        {
            icon: <FaShieldAlt />,
            title: "Why Should You Pick DocoAid?",
            description: "Expertise You Can Trust. DocoAid is backed by a team of highly experienced agents with years of expertise in the fields of document verification, authentication, and legalization.",
        },
        {
            icon: <FaHandshake />,
            title: "Tailored Services for Every Need",
            description: "We understand that each client has unique requirements. We provide customized solutions to fit your specific needs for translation, notary services, and document legalization.",
        },
        {
            icon: <FaTasks />,
            title: "End-to-End Solutions",
            description: "From start to finish, DocoAid provides comprehensive support. Our services cover everything from initial consultations to document authentication and legalization.",
        },
        {
            icon: <FaLock />,
            title: "Efficient and Secure Services",
            description: "At DocoAid, efficiency is a priority. We deliver fast, reliable services while maintaining the highest levels of security for your sensitive documents.",
        },
        {
            icon: <FaGlobe />,
            title: "Comprehensive Global Expertise",
            description: "Whether you need assistance for international travel, business expansion, or complying with global regulations, DocoAid's services meet international standards.",
        },
        {
            icon: <FaUsers />,
            title: "Client-Centric Approach",
            description: "Our mission is to help you achieve your goals by providing excellent service that's tailored to your needs, with transparency and clear communication.",
        },
        {
            icon: <FaStar />,
            title: "Reputation for Reliability",
            description: "DocoAid has built a solid reputation for being a reliable partner for all your documentation needs, with a proven track record in the industry.",
        },
        {
            icon: <FaRocket />,
            title: "Simplifying Your Path to Success",
            description: "DocoAid simplifies the paperwork process, ensuring you are well-prepared to navigate life's important milestones with confidence and ease.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % cards.length;
            visibleCards.push({ ...cards[index], index });
        }
        return visibleCards;
    };

    const cardVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 30
            },
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 30
            },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 30
            },
        }),
    };


    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return; // Don't auto-slide while hovering

        const autoSlideTimer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(autoSlideTimer);
    }, [isHovered]);

    // for auto slide

    return (
        <div className="p-10 w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-center items-center mb-10 space-x-6">
                <h1 className="text-3xl font-bold">Why Should You Pick Docoaid?</h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300"
                >
                    <FaArrowLeft />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300"
                >
                    <FaArrowRight />
                </motion.button>
            </div>

            <div className="relative w-full  flex justify-center items-center">
                <div className="flex space-x-4 overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        {getVisibleCards().map((card, idx) => (
                            <motion.div
                                key={`${card.index}-${idx}`}
                                custom={direction}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="flex-shrink-0 w-64 bg-white shadow-md rounded-lg p-6 text-center transform-gpu"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="mb-4 text-blue-500 text-3xl flex justify-center">
                                    {card.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{card.title}</h3>
                                <p className="text-sm text-gray-600">{card.description}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Carousel;