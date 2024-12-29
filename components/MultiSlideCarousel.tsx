'use client';
import React, { useCallback, useState, useEffect, useRef, JSX } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaArrowLeft, FaArrowRight, FaShieldAlt, FaHandshake, FaTasks, FaLock, FaGlobe, FaUsers, FaStar, FaRocket } from "react-icons/fa";

type SlideType = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true };
const SLIDES: SlideType[] = [
    {
        icon: <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Why Should You Pick DocoAid?",
        description: "Expertise You Can Trust. DocoAid is backed by a team of highly experienced agents with years of expertise in the fields of document verification, authentication, and legalization.",
    },
    {
        icon: <FaHandshake className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Tailored Services for Every Need",
        description: "We understand that each client has unique requirements. We provide customized solutions to fit your specific needs for translation, notary services, and document legalization.",
    },
    {
        icon: <FaTasks className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "End-to-End Solutions",
        description: "From start to finish, DocoAid provides comprehensive support. Our services cover everything from initial consultations to document authentication and legalization.",
    },
    {
        icon: <FaLock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Efficient and Secure Services",
        description: "At DocoAid, efficiency is a priority. We deliver fast, reliable services while maintaining the highest levels of security for your sensitive documents.",
    },
    {
        icon: <FaGlobe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Comprehensive Global Expertise",
        description: "Whether you need assistance for international travel, business expansion, or complying with global regulations, DocoAid's services meet international standards.",
    },
    {
        icon: <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Client-Centric Approach",
        description: "Our mission is to help you achieve your goals by providing excellent service that's tailored to your needs, with transparency and clear communication.",
    },
    {
        icon: <FaStar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Reputation for Reliability",
        description: "DocoAid has built a solid reputation for being a reliable partner for all your documentation needs, with a proven track record in the industry.",
    },
    {
        icon: <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500" />,
        title: "Simplifying Your Path to Success",
        description: "DocoAid simplifies the paperwork process, ensuring you are well-prepared to navigate life's important milestones with confidence and ease.",
    },
];

const MultiSlideCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    const [slidesConfig, setSlidesConfig] = useState<{ widthClass: string, count: number }>({
        widthClass: 'flex-[0_0_100%]',
        count: 1
    });
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    // Function to calculate and update max height
    const updateMaxHeight = useCallback(() => {
        setTimeout(() => {
            if (slideRefs.current.length > 0) {
                const heights = slideRefs.current.map(ref => ref ? ref.scrollHeight : 0);
                const newMaxHeight = Math.max(...heights);
                setMaxHeight(newMaxHeight);
            }
        }, 100);
    }, []);

    // Update slides configuration based on screen width
    useEffect(() => {
        const updateSlidesConfig = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setSlidesConfig({
                    widthClass: 'flex-[0_0_100%]',
                    count: 1
                });
            } else if (width < 1024) {
                setSlidesConfig({
                    widthClass: 'flex-[0_0_100%]',
                    count: 1
                });
            } else if (width < 1280) {
                setSlidesConfig({
                    widthClass: 'flex-[0_0_50%]',
                    count: 2
                });
            } else if (width < 1790) {
                setSlidesConfig({
                    widthClass: 'flex-[0_0_33.33%]',
                    count: 3
                });
            } else {
                setSlidesConfig({
                    widthClass: 'flex-[0_0_25%]',
                    count: 4
                });
            }
        };

        const handleResize = () => {
            updateSlidesConfig();
            setMaxHeight(0);
            updateMaxHeight();
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [updateMaxHeight]);

    // Update heights when emblaApi is initialized or updated
    useEffect(() => {
        if (!emblaApi) return;

        const onInit = () => {
            updateMaxHeight();
        };

        const onResize = () => {
            updateMaxHeight();
        };

        emblaApi.on('init', onInit);
        emblaApi.on('reInit', onInit);
        emblaApi.on('resize', onResize);

        return () => {
            emblaApi.off('init', onInit);
            emblaApi.off('reInit', onInit);
            emblaApi.off('resize', onResize);
        };
    }, [emblaApi, updateMaxHeight]);

    return (
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48" ref={containerRef}>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Why Should You Pick DocoAid?</h1>
                <div className="flex space-x-4">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {SLIDES.map((slide, index) => (
                        <div
                            className={`${slidesConfig.widthClass} px-3 md:px-4`}
                            key={index}
                        >
                            <div
                                ref={el => { slideRefs.current[index] = el }}
                                className="h-full rounded-lg bg-white shadow-lg flex flex-col items-center justify-start p-6 md:p-8 text-center"
                                style={{ minHeight: maxHeight > 0 ? maxHeight : 'auto' }}
                            >
                                <div className="mb-6">
                                    {React.cloneElement(slide.icon, {
                                        className: slidesConfig.count === 1
                                            ? "w-12 h-12 md:w-16 md:h-16 text-blue-500"
                                            : "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500"
                                    })}
                                </div>
                                <h3 className={`font-bold mb-4 ${slidesConfig.count === 1
                                    ? 'text-xl md:text-2xl'
                                    : 'text-lg sm:text-xl'
                                    }`}>
                                    {slide.title}
                                </h3>
                                <p className={`text-gray-600 leading-relaxed ${slidesConfig.count === 1
                                    ? 'text-base md:text-lg'
                                    : 'text-sm sm:text-base'
                                    }`}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MultiSlideCarousel;

// PrevButton Component
type PrevButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrevButton: React.FC<PrevButtonProps> = (props) => {
    const { onClick, disabled } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="p-2 bg-gray-800 text-white rounded-full disabled:opacity-50"
        >
            <FaArrowLeft className="w-6 h-6" />
        </button>
    );
};

// NextButton Component
type NextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const NextButton: React.FC<NextButtonProps> = (props) => {
    const { onClick, disabled } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="p-2 bg-gray-800 text-white rounded-full disabled:opacity-50"
        >
            <FaArrowRight className="w-6 h-6" />
        </button>
    );
};

// usePrevNextButtons Hook
type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};