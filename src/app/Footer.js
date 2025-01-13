import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Positions of Interest */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Positions Of Interest</h2>
          <ul className="space-y-2">
            {['React Js Developer', 'Node Js Developer', 'Data Analyst', 'Full Stack Developer', 'Data Scientist','ML Engineer'].map((position) => (
              <li key={position}>
                <button className="bg-gray-800 text-gray-200 hover:bg-gray-700 px-4 py-2 rounded-md w-full text-left">
                  {position}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Salary Range */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Salary Range</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium text-white">Annual:</span> Accepting custom offers
            </p>
            <p>
              <span className="font-medium text-white">Per hour:</span> Accepting custom offers
            </p>
          </div>
          <div className="mt-6 bg-gray-800 text-gray-200 p-4 rounded-md">
            <p className="mb-4 text-sm">
              NOTE: In case you have an idea for a project but you estimate that your budget may be very small, do not
              refrain from contacting me and presenting your project to me. I'm working to provide flexible payment
              methods that allow us to carry out great projects, without cost being a barrier.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-md">
              Schedule a meeting
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p className="text-sm">This website has been designed and developed by me from scratch :)</p>
          <p className="text-sm mt-2">
            Copyright &copy; <span className="text-blue-400 font-medium">Felista Manoti</span> 2025
          </p>
            <a
            href="mailto:manotifelista9@gmail.com"
            className="mt-6 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-md inline-block"
            >
            Contact Me Via Email
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
