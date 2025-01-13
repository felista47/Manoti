import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
const WorkExperience = () => {
    const experiences = [
      {
        title: "Software Engineer Consultant",
        company: "MCB Group, Mauritius",
        date: "June, 2024 - Present",
        responsibilities: [
          "Developed and maintained software applications for MCB Group, a leading financial institution in Mauritius.",
          "Collaborated with cross-functional teams to deliver high-quality software solutions.",
          "Utilized Agile methodologies to ensure timely delivery of software projects.",
          "Refactor and optimize existing codebase to improve software performance and security.",
        ],
      },
      {
        title: "Angular .NET Software Developer",
        company: "ClearStar - The Jitu, Alpharetta, GA",
        date: "December, 2023 - May, 2024",
        responsibilities: [
          "Designed and developed robust web applications using Angular and .NET.",
          "Implemented RESTful APIs and optimized backend logic for high-performance applications.",
          "Participated in code reviews and ensured adherence to software development best practices.",
          "Worked closely with stakeholders to gather and translate requirements into functional features.",
        ],
      },
    ];
  
    return (
      <section className="bg-gray-100 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Work Experience</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
  
            {/* Experience Items */}
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Date and Icon */}
                <div className="z-10 flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-700 h-full w-1"></div>
  
                {/* Experience Details */}
                <div
                  className={`w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{experience.title}</h3>
                  <p className="text-teal-400">{experience.company}</p>
                  <p className="text-sm text-gray-400">{experience.date}</p>
                  <ul className="mt-4 list-disc list-inside space-y-2">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i} className="text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkExperience;
  