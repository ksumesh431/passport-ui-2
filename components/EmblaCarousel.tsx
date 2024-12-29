'use client';
import React, { useCallback, useState, useEffect } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { basePath } from '@/utils/config'; // Ensure basePath is defined

type SlideType = {
    image: string;
    title: string;
    description: string;
};

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES: SlideType[] = [
    {
        image: `${basePath}/usa.jpg`,
        title: 'United States of America',
        description: 'Experience the American Dream with our comprehensive visa services',
    },
    {
        image: `${basePath}/uk.jpg`,
        title: 'United Kingdom',
        description: 'Discover opportunities in the heart of Great Britain',
    },
    {
        image: `${basePath}/canada.jpg`,
        title: 'Canada',
        description: 'Your gateway to the Great White North\'s possibilities',
    },
    {
        image: `${basePath}/aus.jpg`,
        title: 'Australia',
        description: 'Begin your journey Down Under with expert guidance',
    },
];

const EmblaCarousel = () => {
    // Configure Autoplay with a custom delay and disable stop on interaction
    const autoplayOptions = { delay: 4000, stopOnInteraction: false };
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay(autoplayOptions)]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop;

        resetOrStop();
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    );

    return (
        <section className="mx-4 sm:mx-6 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-48">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {SLIDES.map((slide, index) => (
                        <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
                            <div className="relative w-full h-96 sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8 select-none"> {/* Add select-none here */}
                                    <h3 className="text-white text-3xl font-bold mb-2">{slide.title}</h3>
                                    <p className="text-gray-200">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-4">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`w-3 h-3 rounded-full mx-1 ${index === selectedIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default EmblaCarousel;

// DotButton Component
type DotButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const DotButton: React.FC<DotButtonProps> = (props) => {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
        />
    );
};

// useDotButton Hook
type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

const useDotButton = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
            if (onButtonClick) onButtonClick(emblaApi);
        },
        [emblaApi, onButtonClick]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};