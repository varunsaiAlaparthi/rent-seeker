"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  // For demo purposes, we'll assume the user is logged in
  const isLoggedIn = true;
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'RENTER',
  };
  
  const handleLogout = () => {
    // Implement logout logic here
    router.push('/');
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
          {user?.name.charAt(0).toUpperCase()}
        </div>
        <span className="hidden md:block text-gray-700">{user?.name}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Dashboard
              </Link>
              <Link href="/favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Favorites
              </Link>
              <Link href="/post-property" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Post a Property
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Login
              </Link>
              <Link href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}