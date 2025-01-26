import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-start">
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition" style={{justifyContent: 'start'}}>
            BlogManager
          </Link>
          <div className="space-x-4 justify-end" style={{justifyContent: 'end'}}>
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/create" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
              Create Post
            </Link>
          </div>
        </div> 
      </nav>
    </header>
  );
};

export default Header; 