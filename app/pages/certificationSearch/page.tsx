"use client";

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

type Props = {}

export default function CertificationSearch({ }: Props) {

  const [selectedCategory, setSelectedCategory] = useState('Title 1');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false); //modal için

  const openModal = () => setIsOpen(true); //modal açık olma durumu
  const closeModal = () => setIsOpen(false); //modal kapalı olma durumu

  const categories = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'];

  const items = [
    {
      id: 1,
      content: "As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees."
    },
    {
      id: 2,
      content: "As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees."
    },
    {
      id: 3,
      content: "As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees."
    },
    {
      id: 4,
      content: "As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees."
    },
    {
      id: 5,
      content: "As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees."
    },
    {
      id: 6,
      content: "As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees. As RoyalCert, we prioritize respect, honesty, accountability, teamwork, education, fairness, diversity and transparency to develop long-term relationships with our customers and employees."
    },

  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  function contentText(title: string) {
    return (
      <div className="space-y-6 mx-40">
        {items.map((item, index) => (
          <div key={item.id} className="border-b pb-4">
            {/* Başlık Kısmı */}
            <div
              onClick={() => toggleExpand(index)}
              className="flex justify-between items-center cursor-pointer mb-2"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl mr-8 font-bold text-red-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xl font-medium">{title}</span>
              </div>
              <button onClick={openModal} className="bg-red-700 text-white px-12 py-2 text-xs rounded-full">Apply</button>
              {/**modal */}
              {isOpen && (
                <div
                  onClick={closeModal} // Arkaplana tıklanınca modalı kapat
                  className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50">
                  <div
                    onClick={(e) => e.stopPropagation()} // Modal içeriğine tıklanınca modal kapanmasın
                    className="bg-white rounded-3xl p-8 w-full max-w-lg relative">
                    <h2 className="text-xl font-bold text-center mb-2">We'll call you</h2>
                    <p className="text-gray-500 text-xs text-center mb-8">
                      Fill out the form below so we can contact you.
                    </p>
                    <form className="space-y-4 text-center">
                      <input
                        type="text"
                        placeholder="Name surname"
                        className="w-full text-xs bg-gray-200 border rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:border-gray-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full text-xs bg-gray-200 border rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:border-gray-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full text-xs bg-gray-200 border rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:border-gray-500"
                      />
                      <button
                        type="submit"
                        className="bg-red-700 text-white px-12 py-2 rounded-md text-xs"
                      >
                        Send
                      </button>
                    </form>

                    <div className="flex justify-between space-x-4 items-center mt-6">
                      <div className="flex items-center text-red-700">
                        <img
                          src='/add-call.png'
                          className='h-6 w-6 mr-4' />
                        <p className='text-xs font-medium'>Call us</p>
                      </div>
                      <div className='flex flex-row space-x-4'>
                        <div className="border border-red-700 text-red-700 px-6 py-2 font-medium text-xs rounded-md">
                          +90 501 001 25 12
                        </div>
                        <div className="border border-red-700 text-red-700 px-6 py-2 font-medium text-xs rounded-md">
                          +90 501 001 25 51
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
            {/* İçerik Kısmı */}
            {expandedIndex === index && (
              <div className="mt-6 mb-6 ml-16 text-gray-700 text-xs font-medium">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='bg-red-700 rounded-br-[200px] h-[1220px]'>
      <div className=' flex flex-col h-[1170px] rounded-br-[220px] bg-white'>
        {/** banner */}
        <div className='relative'>
          <img src="/certification-image1.jpg" alt="img" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent content-center">
            <div className='text-white flex flex-col text-center'>
              <p className='text-6xl'>WE'LL CALL YOU</p>
              <p className='text-sm italic mt-4'>It is a document required for any business, large or small.<br></br>Documenting your processes formally defines these processes.</p>
              <div className='items-center justify-center text-center mt-6'>
                <Link href={"/"} className='bg-gray-500 py-2 px-10 rounded-md text-white text-sm'>
                  Call now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* title butonları */}
        <div className='mt-10 space-x-6 text-center'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 rounded-full text-xs ${selectedCategory === category
                ? 'bg-red-700 text-white border border-red-700'
                : 'bg-white text-gray-500 border border-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <hr className='mt-4 mx-40'></hr>
        {/* İçerik */}
        <div className="mt-8">
          {selectedCategory === 'Title 1' && contentText("ISO0023")}
          {selectedCategory === 'Title 2' && contentText("ISO0024")}
          {selectedCategory === 'Title 3' && contentText("ISO0025")}
          {selectedCategory === 'Title 4' && contentText("ISO0026")}
          {selectedCategory === 'Title 5' && contentText("ISO0027")}
        </div>
      </div>
    </div>
  )
}