import React from 'react';
import background from '../images/backgroundimg.webp';
import profileImage from '../images/profile.jpg';

const Projects = () => {
  const projectData = [
    {
      title: 'Hauzisha',
      description: 'A platform that helps you find Rental and Sale Houses.',
      tags: ['NextJs', 'Laravel', 'Typescript', 'Javascript'],
      image: profileImage,
      codeLink: '#code',
      demoLink: '#demo',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal website to showcase my projects and skills.',
      tags: ['React', 'TailwindCSS', 'JavaScript'],
      image: profileImage,
      codeLink: '#code',
      demoLink: '#demo',
    },
    {
      title: 'E-commerce App',
      description: 'An online store platform for various products.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: profileImage,
      codeLink: '#code',
      demoLink: '#demo',
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="relative shadow-md">
        {/* Background Image and Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        </div>

        {/* Text section */}
        <div className="relative z-10 text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Take a look at some of the awesome projects I have been working on since I started learning programming. 
            To view the full list, click the archive button below.
          </p>
          <a
            href="#archive"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            View Archive
          </a>
        </div>
      </header>

      {/* Projects Section */}
    <div className="relative bg-gray-100 text-gray-800 py-10 mx-10">
        {/* Timeline Line */}
     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

    {projectData.map((project, index) => (
          <div
            key={index}
            className="relative mb-10"
          >
            {/* Timeline Icon */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center z-10`}
            >
              <i className="fas fa-briefcase"></i>
            </div>
            {/* Description in Blue Circle */}
            <div
            className={`absolute ${index % 2 === 0 ? 'right-[55%]' : 'left-[55%]'} transform -translate-y-1/2 w-16 h-16 bg-blue-500 text-white text-sm flex items-center justify-center rounded-full shadow-lg`}
            >
            {project.description}
            </div>


            {/* Project Card */}
            <div className={`relative bg-gray-800 rounded-lg shadow-md  max-w-xl ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} mt-8`}>

              <div className="rounded-t-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  className="object-cover w-full h-[200px]"
                />
              </div>
              <div className="mt-2">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.codeLink}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm px-4 py-2 rounded-md"
                  >
                    Code
                  </a>
                  <a
                    href={project.demoLink}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm px-4 py-2 rounded-md"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
