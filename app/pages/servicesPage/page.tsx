"use client";

import { useState } from 'react';
import Image from 'next/image';

type Slide = {
    image: string;
    title: string;
    content: string;
};

const slides: Slide[] = [
    {
        image: '/cert.png',
        title: 'ISO Certification',
        content: "ISO sets quality standards for industries. These standards are aimed at increasing customer satisfaction and encouraging costs to be reduced. In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful. In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful. In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful.",
    },
    {
        image: '/power.png',
        title: 'Technical Controls',
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
        image: '/web.png',
        title: 'Sustainable Tourism',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        image: '/sun.png',
        title: 'Energy Efficiency',
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    },
    {
        image: '/cert.png',
        title: 'ISO Certification',
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
];

export default function ServicesPage() {
    const [selectedSlide, setSelectedSlide] = useState(slides[0]); // İlk veri

    const handleSlideClick = (slide: Slide) => {
        setSelectedSlide(slide); // Seçilen slide
    };

    function serviceContent(slide: Slide) { // Service içeriği
        return (
            <div className="px-40 flex flex-row my-4 mx-40 py-6">
                <img src={slide.image} alt="img" className="h-52 my-8 mr-16" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-red-700 font-semibold uppercase text-2xl">{slide.title}</h2>
                    <p className="text-black text-xs mt-6">{slide.content}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-red-800 flex flex-col rounded-br-[200px] h-[1240px]">
            <div className="flex flex-col h-[1190px] rounded-br-[220px] bg-gray-100">
                <div className="bg-white py-20">
                    {serviceContent(selectedSlide)} {/* Seçilen slide */}
                </div>
                <div className="flex flex-col my-20 mx-40">
                    <Slider onSlideClick={handleSlideClick} /> {/* Slider'da tıklanan içerik handleSlideClick'e aktarılıyor */}
                </div>
            </div>
        </div>
    );
}

const Slider: React.FC<{ onSlideClick: (slide: Slide) => void }> = ({ onSlideClick }) => {
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
            <p className='text-black font-semibold text-3xl mb-6 flex'>Other Services</p>
            <p className='text-black font-medium text-xs mb-8'>As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to<br></br>develop long-term relationships with our customers and employees.</p>
            <div
                className="flex transition-transform duration-500 ease-in-out mt-4"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
                {/** slider yapısı */}
                {slides.map((slide, index) => ( 
                    <div
                        key={index}
                        className="w-[240px] h-72 cursor-pointer bg-white flex-shrink-0 relative transition-transform duration-300 ease-in-out mr-6 rounded-3xl"
                        onClick={() => onSlideClick(slide)}
                    >
                        <div className="absolute rounded-3xl"></div>
                        <div className='text-white flex flex-col inset-0 absolute content-center justify-between'>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-6 h-6 mr-4 mt-4 place-self-end"
                            />
                            <p className="pl-6 pr-8 pt-2 pb-4 text-2xl text-black font-normal hover:text-gray-600">{slide.title}</p>
                            <p className="text-xs pl-6 pr-8 mb-6 text-black font-normal line-clamp-4">{slide.content}</p>
                            <hr className="border-t border-gray-300 opacity-50" />
                            <div className='flex flex-row items-center justify-end h-12 pr-4'>
                                <p className="text-red-800 mr-1 text-xs font-medium ">More</p>
                                <Image
                                            src="/right-arrow.png"
                                            alt="image"
                                            width={14}
                                            height={14}
                                            className=""
                                        />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-12 flex space-x-2 mt-16">
                <button onClick={prevCard}>
                    <img src="/left-arrow.png" alt="Previous" width={18} height={18} />
                </button>
                <button onClick={nextCard}>
                    <img src="/right-arrow.png" alt="Next" width={18} height={18} />
                </button>
            </div>
        </div>
    );
};
