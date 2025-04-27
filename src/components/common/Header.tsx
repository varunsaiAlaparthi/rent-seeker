"use client";

import Link from 'next/link';
import { useState } from 'react';
import UserMenu from '@/components/user/UserMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-blue-600">
            RentSeeker
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/properties" className="text-gray-700 hover:text-blue-600">
              Properties
            </Link>
            <Link href="/post-property" className="text-gray-700 hover:text-blue-600">
              Post a Property
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <UserMenu />
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Link href="/properties" className="block py-2 text-gray-700">
              Properties
            </Link>
            <Link href="/post-property" className="block py-2 text-gray-700">
              Post a Property
            </Link>
            <Link href="/dashboard" className="block py-2 text-gray-700">
              Dashboard
            </Link>
            <div className="pt-4 border-t mt-4">
              <UserMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}