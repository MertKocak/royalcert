import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Slider from '@/app/components/Slider'

type Props = {}

export default function globalNews({ }: Props) {
    return (
        <div className="bg-red-800 rounded-br-[200px] h-[1620px]">
            <div className="flex flex-col my-16 pb-24 h-[1570px] rounded-br-[220px] bg-white">
                <div className='items-center justify-center space-y-3 flex flex-col mb-6'>
                    <p className='text-black font-semibold text-lg '>Crown Your Quality</p>
                    <p className='text-red-700 font-semibold text-2xl text-center'>JUNE 5 WORLD ENVIRONMENT DAY AND<br></br>SUSTAINABLE TOURISM</p>
                    <p className='text-gray-600 font-medium text-[10px] '>06.12.2024</p>
                </div>
                <Image
                    src="/globalNewsImage.png"
                    alt="image"
                    width={1100}
                    height={400}
                    className="rounded-3xl mx-auto"
                />
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