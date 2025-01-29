import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Set a state to track the active page
  const [activeLink, setActiveLink] = useState();

  return (
    <div className="bg-gray-80 text-black font-bold flex justify-between items-center py-4 px-40 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center">
      <Link
            to="/"
          >
            Manoti
          </Link> 
       </div>

      <ul className="flex space-x-4">
        <li>
          <Link
            to="/projects"
            onClick={() => setActiveLink('portfolio')}
            className={`hover:border-b-4 hover:border-blue-500 ${activeLink === 'portfolio' ? 'border-b-4 border-blue-500' : ''}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            onClick={() => setActiveLink('blog')}
            className={`hover:border-b-4 hover:border-blue-500 ${activeLink === 'blog' ? 'border-b-4 border-blue-500' : ''}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setActiveLink('contact')}
            className={`hover:border-b-4 hover:border-blue-500 ${activeLink === 'contact' ? 'border-b-4 border-blue-500' : ''}`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <a
        href="https://www.fiverr.com/s/XLQrpGD"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Hire Me
      </a>
    </div>
  );
};

export default Navbar;
