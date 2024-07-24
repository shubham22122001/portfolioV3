import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full mb-4">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div>
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="flex justify-end mt-4">
            <a
              href={project.code} // Replace with your project's actual Git URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg text-center bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.805 2.267a1.524 1.524 0 00-2.17 0 1.524 1.524 0 002.17 1.526l7.916 4.198a1.524 1.524 0 001.525-2.326l-8.178-4.488zM X 0" />
              </svg>
              GitHub
            </a>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
