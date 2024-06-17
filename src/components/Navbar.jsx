import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-transparent to-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/logo.png" 
              alt="Organization Logo"
              className="h-[3rem] w-auto bg-transparent"
            />
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              <Link to="/home" className="bg-transparent text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
                Home
              </Link>
              <Link to="/internships" className="bg-transparent text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
                Internships
              </Link>
              <Link to="/mock-tests" className="bg-transparent text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
                Mock Tests
              </Link>
              <Link to="/learning" className="bg-transparent text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
                Learning
              </Link>
              <Link to="/about" className="bg-transparent text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/get-started" className="bg-[#2a415f] text-white px-3 py-2 rounded-[2rem] text-sm font-semibold hover:shadow-lg">
              Get Started
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-blue-500 transition-transform duration-300 ease-in-out">
              {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out`}
        style={{ width: '35%' }}
      >
        <div className="p-4">
          <button onClick={toggleSidebar} className="text-[#2a415f] mb-6 transition-transform duration-300 ease-in-out">
            <FiX size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            <Link to="/get-started" className="bg-[#2a415f] text-white px-3 py-2 rounded-[2rem] text-[0.775rem] font-semibold flex justify-center hover:shadow-lg">
              Get Started
            </Link>
            <Link to="/login" className="bg-[#2a415f] text-white px-3 py-2 rounded-[2rem] text-sm font-semibold flex justify-center hover:shadow-lg">
              Login
            </Link>
            <Link to="/home" className="bg-white text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
              Home
            </Link>
            <Link to="/internships" className="bg-white text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
              Internships
            </Link>
            <Link to="/mock-tests" className="bg-white text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
              Mock Tests
            </Link>
            <Link to="/learning" className="bg-white text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
              Learning
            </Link>
            <Link to="/about" className="bg-white text-[#2a415f] hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-semibold">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
