import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-soul-500 to-soul-600 bg-clip-text text-transparent">
              SoulFelt Music
            </h1>
          </div>
          <p className="text-sm text-gray-600 hidden sm:block">
            Music with feeling
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
