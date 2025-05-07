import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const WorkExperience = () => {
    const experiences = [
      {
        title: "Software developer intern",
        company: "ORCARGO LIMITED",
        date: "February, 2025 - April, 2025",
        responsibilities: [
          "Designed and developed the company’s main website and a community platform to support customer engagement and driver onboarding.",
          "Built responsive user interfaces using HTML, Tailwind CSS, and JavaScript frameworks, ensuring mobile compatibility and modern UX",
          "Developed backend functionality with Laravel and Node.js to support community features such as thread posting, image/video uploads, and user interactions",
          "Integrated admin functionalities for managing users, threads, and posts, with full CRUD operations.",
          "Collaborated closely with the team lead to architect and initiate development of a B2B logistics platform, focusing on API structure, database design, and dashboard UI",
          "Participated in customer feedback collection and onboarding process for drivers during early-stage testing.",
          
        ],
      },
      {
        title: "Data Science, Machine Learning and AI Intern",
        company: "NRCH, ENGAGE PROGRAM",
        date: "September, 2024 - october, 2024",
        responsibilities: [
          "Performed data preprocessing, ensuring data quality and completeness for predictive models.",
          "Analyzed patient data to identify trends in disease prevalence and treatment outcomes..",
          "Presented findings in a departmental seminar, enhancing communication and teamwork skills.",
        ],
      },
      {
        title: "Intern, Information Technology",
        company: "National Youth Service - HQ, Nairobi",
        date: "May, 2023 - August, 2023",
        responsibilities: [
          "Troubleshooted hardware/software issues and provided technical support.",
          "Assisted with the maintenance and management of computer systems,networks, and database",
          "Contributed to IT projects (installations, upgrades)",
          "Researched industry trends to improve IT infrastructure",
        ],
      },
      {
        title: "Software Developer Intern",
        company: "The Jitu, Nyeri, Kenya",
        date: "May, 2022 - August, 2022",
        responsibilities: [
          "Went through a training program on JavaScript, React, Node.js, Express, and SQL Server Database.",
          "Tasked with performing tests and writing reports to the supervisor.",
          "Interfaced with clients on a weekly basis, providing technological expertise and knowledge.",
        ],
      },
    ];

    return (
      <section className="bg-gray-100 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Work Experience</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

            {/* Experience Items */}
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative mb-10"
              >
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center z-10">
                  <i className="fas fa-briefcase"></i>
                </div>

                {/* Date */}
                <div className={`absolute ${index % 2 === 0 ? 'right-[55%]' : 'left-[55%]'} transform -translate-y-1/2 text-sm text-gray-400`}> 
                  {experience.date}
                </div>

                {/* Experience Details */}
                <div className={`relative bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} mt-8`}>
                  <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                  <p className="text-teal-400 mb-1">{experience.company}</p>
                  <ul className="list-disc list-inside space-y-2">
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
