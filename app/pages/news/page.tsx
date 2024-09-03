import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Slider from '@/app/components/Slider-news'

type Props = {}

export default function news({ }: Props) {
    return (
        <div className="bg-red-800 flex flex-col rounded-br-[200px] h-[1580px]">
            <div className='flex flex-col h-[1530px] rounded-br-[220px] bg-white'>
                <div className='relative'>
                    <img src="/news-image1.jpg" alt="img" className="object-cover w-full h-[360px]" />
                    <div className="absolute inset-0 bg-red-800 opacity-80 "></div>
                    <div className='text-white flex flex-col text-center inset-0 absolute content-center justify-center'>
                        <p className='text-3xl font-medium'>Crown Your Quality</p>
                        <p className='text-5xl font-normal mt-6'>JUNE 5 WORLD ENVIRONMENT DAY<br></br>AND SUSTAINABLE TOURISM</p>
                        <p className='text-white mt-6 font-light text-xs'>06.12.2024</p>
                    </div>
                </div>
                <div className='mx-96 my-16 items-center flex justify-center'>
                    <p className='text-black font-medium text-xs'>
                        ISO sets quality standards for industries. These standards are aimed at increasing customer satisfaction and encouraging costs to be reduced.<br></br><br></br><br></br>
                        In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful.<br></br><br></br><br></br>
                        In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful.<br></br><br></br><br></br>
                        ISO sets quality standards for industries. These standards are aimed at increasing customer satisfaction and encouraging costs to be reduced.<br></br><br></br><br></br>
                        In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful.<br></br><br></br><br></br>
                        In today's fast-paced and ever-changing business world, innovation is important to stay ahead of the competition. Business innovation refers to the process of introducing new ideas, products or services that create value and improve performance. With the rise of technology and globalization, businesses must constantly innovate to remain relevant and successful.<br></br><br></br><br></br>
                    </p>
                </div>
                <div className='flex flex-col mx-40'>
                    <Slider></Slider>
                </div>
            </div>
        </div>
    )
}