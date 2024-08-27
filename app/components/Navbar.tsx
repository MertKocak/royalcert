"use client";

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-32 mt-0 flex justify-center flex-col">
      <div className="flex items-center justify-center py-6">
        <div className="flex items-center">
          {/* Logo */}
          <div className="mr-12">
            <Link href="/">
              <img src="/logo.jpg" alt="Logo" className="h-12" />
            </Link>
          </div>
          {/* Navbar Linkleri */}
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
            <Link href="/pages/sustainability" className="text-black hover:text-gray-600 text-sm font-bold">
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
            <Link href="/pages/contact" className="text-black hover:text-gray-600 text-sm font-bold">
              Contact
            </Link>
            <Link href="/" className="text-black hover:text-gray-600 text-sm font-bold">
              News
            </Link>
            <Link href="/pages/globalNews" className="text-black hover:text-gray-600 text-sm font-bold">
              Global News
            </Link>
          </div>
        </div>
        {/* Document Inquiry Butonu*/}
        <div className="flex items-center ml-8">
          <div className='px-2 py-2 bg-gray-500 rounded-md text-sm text-white flex flex-row'>
            <Link href="/">
              <img src="/search.png" alt="Logo" className="h-3.5 mt-1 mr-1" />
            </Link>
            Document Inquiry
          </div>
        </div>
      </div>
      {/**Alt Navbar */}
      <div className=" flex bg-gray-500 py-3 justify-center">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Home
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Our Company
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Services
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Sectors
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Publications
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            News
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Contact
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Accreditation
          </Link>
          <Link href="/pages/certificationSearch" className="text-white hover:text-gray-100 text-xs">
            Certification Search
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Request a Quote
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Locations
          </Link>
          <Link href="/" className="text-white hover:text-gray-100 text-xs">
            Career
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
