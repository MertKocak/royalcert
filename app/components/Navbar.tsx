"use client";

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-24 flex justify-center">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-12">
            <Link href="/">
              <img src="/logo.jpg" alt="Logo" className="h-12" />
            </Link>
          </div>
          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Institutional
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Sectors
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Services
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Sustainability
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Applications
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Regulations
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Gallery
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Contact
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              News
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              Global News
            </Link>
          </div>
        </div>
        {/* Document Inquiry Button */}
        <div className="flex items-center">
          <div className='px-2 py-2 bg-gray-500 rounded-md text-sm text-white flex flex-row'>
            <Link href="/">
              <img src="/search.png" alt="Logo" className="h-3.5 mt-1 mr-1" />
            </Link>
            Document Inquiry
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
