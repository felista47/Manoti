import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImage from '../images/profile.jpg';
import background from '../images/backgroundimg.webp';
import WorkExperience from "./WorkExperience";


const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="shadow-md relative">
          {/* Background Image and Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>
          </div> 
         <div className="relative flex justify-center">
                <div className="flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-1/2  md:text-left py-40">
                    <h1 className="text-4xl font-bold leading-tight">
                    Hello, I’m <span className="text-blue-500">Manoti</span>.
                    <br /> Data Analyst | Frontend Developer | AI and Data Scientist.
                    </h1>
                    <p className="mt-4 text-gray-600">
                    With a background in Computer Science, I bridge the user’s needs with business goals through data-driven design.
                    </p>
                    {/* Location Section */}
                    {/* <div className="mt-6">
                    <p className="text-gray-600 flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i> Currently in <span className="font-semibold text-gray-800 ml-1">Nairobi, Kenya</span>
                    </p>
                    </div> */}
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center relative md:mt-0">
                    <img
                    src={profileImage}
                    alt="Profile"
                        className="shadow-lg max-w-[200px] rounded-full"

                    />
                   
                </div>
                 {/* Social Icons */}
                 {/* <div className="absolute bottom-4 inset-x-0 flex justify-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/felista-manoti-45407a1b3"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-blue-500 text-white hover:bg-blue-700 transition text-2xl"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/felista47/"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-blue-500 text-white hover:bg-blue-700 transition text-2xl"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    </div> */}
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2">

                <div className="mt-8 flex justify-center">
                <a
                    href="https://drive.google.com/uc?export=download&id=1C2N30Eoi9Ee6qDX0BlMAL0eBZLMg6jTi"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition"
                  >
                    Download Resume
                  </a>

                </div>
                </div>
        </div>
      </header>

      <WorkExperience/>
    </div>
  );
};

export default LandingPage;
