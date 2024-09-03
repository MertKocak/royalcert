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
        image: '/news-image1.jpg',
        title: 'June 5 World Environment Day and Sustainable Tourism',
        date: '30.09.2024',
    },
    {
        image: '/news-image1.jpg',
        title: 'June 5 World Environment Day and Sustainable Tourism',
        date: '30.09.2024',
    },
    {
        image: '/news-image1.jpg',
        title: 'June 5 World Environment Day and Sustainable Tourism',
        date: '30.09.2024',
    },
    {
        image: '/news-image1.jpg',
        title: 'June 5 World Environment Day and Sustainable Tourism',
        date: '30.09.2024',
    },
    {
        image: '/news-image1.jpg',
        title: 'June 5 World Environment Day and Sustainable Tourism',
        date: '30.09.2024',
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
        <div className="relative w-full max-w-[1440px] mx-auto overflow-hidden justify-end">
            <p className='text-black font-semibold text-[28px] flex'>Other News</p>
            <Link href={"/pages/news"}
                className="flex transition-transform duration-500 ease-in-out mt-4"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-[240px] h-72 flex-shrink-0 relative transition-transform duration-300 ease-in-out mr-6 rounded-3xl"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent rounded-3xl"></div>
                        <div className='text-white flex flex-col inset-0 absolute content-center justify-end'>
                            <p className="text-sm pl-4 pr-8 py-4 font-normal hover:text-gray-300">{slide.title}</p>
                            <hr className="border-t border-gray-300 opacity-20" />
                            <div className='flex flex-row items-center justify-between pr-4'>
                                <p className="text-white px-4 py-5 font-light text-xs">{slide.date}</p>
                                <Link href="/pages/news" className='flex flex-row h-[16px] justify-center items-center'>
                                    <p className="text-white mr-1 py-5 text-xs font-medium ">More</p>
                                    <Image
                                        src="/left-arrow.png"
                                        alt="image"
                                        width={14}
                                        height={14}
                                        className="rotate-180"
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

