import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 text-blue-300 text-2xl font-bold font-tilt">
        hobby<span className='text-purple-400'>cue</span>
        <div className='text-xl text-gray-400'>your hobby, your community</div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="lg:flex lg:items-center lg:space-x-4 w-full lg:w-auto">
          <div className="relative lg:mr-4 mt-4 lg:mt-0 w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search Something Here..." 
              className="p-2 border border-gray-300 w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
            <div className="relative group">
              <button className="text-white text-lg hover:text-slate-500 font-tilt">Explore</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">People-Community</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Places-Venues</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Program-Events</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Product-Stores</a>
              </div>
            </div>
            <div className="relative group mt-2 lg:mt-0">
              <button className="text-white text-lg hover:text-slate-500 font-tilt">Hobbies</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Development</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Content Writing</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Cricket</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 text-white mt-4 lg:mt-0 lg:ml-auto">
          <i className="fas fa-bell cursor-pointer"></i>
          <i className="fas fa-envelope cursor-pointer"></i>
          <i className="fas fa-user cursor-pointer"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
