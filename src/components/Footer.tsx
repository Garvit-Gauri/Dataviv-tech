import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">BlogManager</h3>
            <p className="text-sm text-gray-400">Manage your blog posts with ease</p>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} BlogManager. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 