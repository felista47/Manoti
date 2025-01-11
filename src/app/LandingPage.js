import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow-md relative">
        <div className="flex justify-center">
                {/* Email Section */}
                <div className="absolute top-4 left-8">
                <p className="text-gray-600 text-sm">
                    EMAIL: 
                    <a href="mailto:felistamanoti@gmail.com" className="text-blue-500 hover:underline">
                    felistamanoti@gmail.com
                    </a>
                </p>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold leading-tight">
                    Hello, I’m <span className="text-blue-500">Manoti</span>.
                    <br /> Data Analyst | Frontend Developer | AI and Data Scientist.
                    </h1>
                    <p className="mt-4 text-gray-600">
                    With a background in Computer Science, I bridge the user’s needs with business goals through data-driven design.
                    </p>
                    {/* Location Section */}
                    <div className="mt-6">
                    <p className="text-gray-600 flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i> Currently in <span className="font-semibold text-gray-800 ml-1">Nairobi, Kenya</span>
                    </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center relative md:mt-0">
                    <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczN-_DJXVOx4flitao5_f8iTQ2FkihiCYEnjE4I1JWKSPj3XvCt-Rhq4Im5Qd_FqicYEYtkDspc_2C8FxJvGSxgv-ljyIssxMRUDkcBD4Iziwp34xOo0HmYJDT_s81mg_C0-K-hpHZIrtAZ1Ei2ChCS5=w451-h599-s-no-gm?authuser=0"
                    alt="Profile"
                    className="shadow-lg w-full max-w-[600px]"
                    />
                    {/* Social Icons */}
                    <div className="absolute bottom-4 inset-x-0 flex justify-center gap-4">
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
                    </div>
                </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-arrow-down text-white text-xl"></i>
                </div>
                </div>
        </div>
    </header>




      {/* Main Content */}
      <main>
        {/* My Story Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-6">My Story</h2>
          <p className="text-center text-gray-700">
            I currently work at Facebook as a Product Designer, focusing on creating intuitive
            interfaces that prioritize the user’s needs.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-6">Work Experience</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-bold">Product Designer @ Facebook</h3>
                <p className="text-gray-600">June 2020 - Present</p>
              </li>
              <li>
                <h3 className="text-xl font-bold">Graduate Research Assistant @ XYZ</h3>
                <p className="text-gray-600">Aug 2018 - May 2020</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-6">Selected Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="bg-white shadow-md rounded-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-gray-600">Description of the project.</p>
                  <a
                    href="#"
                    className="text-blue-500 mt-4 inline-block hover:underline"
                  >
                    View Project Details
                  </a>
                </div>
              </div>
              {/* Repeat for more projects */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Geunbae Lee. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
