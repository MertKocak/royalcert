"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Slide = {
    image: string;
    title: string;
    date: string;
};

const slides: Slide[] = [
    {
        image: '/globalNewsImage.png',
        title: 'Endeksa International June 5 World Environment Day and Sustainable Tourism',
        date: '15.08.2024',
    },
    {
        image: '/image2.png',
        title: 'Endeksa International June 5 World Environment Day and Sustainable Tourism',
        date: '15.08.2024',
    },
    {
        image: '/globalNewsImage.png',
        title: 'Endeksa International June 5 World Environment Day and Sustainable Tourism',
        date: '15.08.2024',
    },
    {
        image: '/image2.png',
        title: 'Endeksa International June 5 World Environment Day and Sustainable Tourism',
        date: '15.08.2024',
    },
    {
        image: '/globalNewsImage.png',
        title: 'Endeksa International June 5 World Environment Day and Sustainable Tourism',
        date: '15.08.2024',
    },
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-[1440px] h-96 mx-auto overflow-hidden justify-end">
            <p className='text-black font-semibold text-[28px] flex' >Other Global News</p>
            <Link href={"/pages/globalNews"}
                className="flex transition-transform duration-500 ease-in-out mt-4"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-[480px] flex-shrink-0 transition-transform duration-300 ease-in-out bg-gray-100 mr-6 rounded-3xl"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-36 object-cover rounded-t-3xl"
                        />
                        <div className="">
                            <h2 className="text-base pl-4 pr-8 py-3 font-medium hover:text-gray-600">{slide.title}</h2>
                            <hr className="border-t border-gray-200" />
                            <div className='flex flex-row items-center justify-between pr-4'>
                                <p className="text-gray-500 px-4 py-5 text-xs">{slide.date}</p>
                                <Link href="/pages/globalNews" className='flex flex-row h-[16px] justify-center items-center'>
                                    <p className="text-red-700 mr-1 py-5 text-xs font-medium ">More</p>
                                    <Image
                                        src="/right-arrow.png"
                                        alt="image"
                                        width={16}
                                        height={16}
                                        className=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Link>
            <div className="absolute top-0 right-12 flex space-x-2 mt-6">
                <button
                    onClick={prevCard}
                    className=""
                >
                    <Image
                        src="/left-arrow.png"
                        alt="image"
                        width={18}
                        height={18}
                        className=""
                    />
                </button>
                <button
                    onClick={nextCard}
                    className=""
                >
                    <Image
                        src="/right-arrow.png"
                        alt="image"
                        width={18}
                        height={18}
                        className=""
                    />
                </button>
            </div>
        </div>
    );
};

export default Slider;


/* const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 3 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 3 : prevIndex - 1
        );
    };

    return (
        <div className="relative  mx-auto">
            <div className='flex flex-row mb-2'>
                <p className='text-black font-semibold text-3xl flex' >Other Global News</p>
                <div className='absolute right-0 '>
                <button
                    onClick={prevSlide}
                    className="relative bg-black bg-opacity-50 text-white p-2"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="relative  ml-4 bg-black bg-opacity-50 text-white p-2"
                >
                    &#10095;
                </button>
                </div>
            </div>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 33}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-[480px] bg-gray-100 mr-6 rounded-3xl ">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-36 object-cover rounded-t-3xl"
                            />
                            <div className="">
                                <h2 className="text-base pl-4 pr-8 py-4 font-medium">{slide.title}</h2>
                                <hr className="border-t border-gray-300" />
                                <p className="text-gray-500 px-4 py-6 text-xs">{slide.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Slider; */

