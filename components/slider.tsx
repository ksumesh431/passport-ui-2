'use client';
import { useState } from "react";
import { FaLaptopCode, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Carousel = () => {
    const cards = [
        {
            icon: <FaLaptopCode />,
            title: "NOTARY",
            description: "Comprehensive services for all notary requirements.",
        },
        {
            icon: <FaUsers />,
            title: "EMBASSY SERVICES",
            description: "Professional assistance with embassy-related services.",
        },
        {
            icon: <FaChalkboardTeacher />,
            title: "FEDERAL CERTIFICATION",
            description: "Flexible and accredited federal certification programs.",
        },
        {
            icon: <FaChalkboardTeacher />,
            title: "PROVINCIAL",
            description: "Provincial certifications tailored to your needs.",
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
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % cards.length;
            visibleCards.push({ ...cards[index], index });
        }
        return visibleCards;
    };

    const cardVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeInOut"
            },
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeInOut"
            },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.3,
                type: "tween",
                ease: "easeInOut"
            },
        }),
    };

    return (
        <div className="p-10">
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

            <div className="relative w-full flex justify-center items-center overflow-hidden">
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