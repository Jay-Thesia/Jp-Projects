import SiteLoader from 'components/comman/loader/SiteLoader';
import { useGetProjectAPI } from 'pages/admin/projects/services/project.service';
import { ProjectInterface } from 'pages/admin/types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projectList, setProjectList] = useState<any>([]);

  let { getProjectAPI, isLoading, isError } = useGetProjectAPI();
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const { data } = await getProjectAPI();

        // Handle the response here
        setProjectList(data);
      } catch (error) {
        console.error(`Error in fetching project to home screen ::: ${error}`);
      }
    };

    fetchProjectData();
  }, []);

  return (
    <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
      <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
        <p>OUR PROJECTS</p>
        <div
          id="projects"
          className="absolute font-800 text-white text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10"
          style={{ WebkitTextStroke: '0.3px #142534' }}
        >
          GALLERY
        </div>
      </div>

      {/* Cards */}
      {/* Cards */}
      {projectList?.length > 0 ? (
        projectList?.map((currProject: ProjectInterface, index: number) => (
          <div
            key={currProject._id}
            className={`mt-8 mx-auto flex flex-col sm:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-2xl max-w-full overflow-hidden ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } md:flex-row md:max-w-4xl`}
          >
            {/* Image Container */}
            <div
              className={`relative w-full sm:w-1/2 md:w-2/5 overflow-hidden text-gray-700 bg-white ${
                index % 2 === 0
                  ? 'sm:rounded-t-xl sm:rounded-r-none'
                  : 'sm:rounded-t-xl sm:rounded-l-none'
              } bg-clip-border rounded-t-xl md:rounded-none shrink-0`}
            >
              <img
                src={currProject.projectImages?.[0]?.secure_url}
                alt={currProject.projectName}
                className="object-cover w-full h-64 sm:h-48 md:h-72 lg:h-80"
              />
            </div>

            {/* Content Container */}
            <div
              className={`p-4 sm:p-6 w-full ${
                index % 2 === 0 ? '' : 'md:flex-grow'
              }`}
            >
              <h6 className="block mb-2 md:mb-4 font-sans text-sm md:text-base font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                {currProject.projectType}
              </h6>
              <h4 className="block mb-2 font-sans text-xl md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                {currProject.projectName}
              </h4>
              <p className="block mb-5 md:mb-7 font-sans text-sm md:text-base font-normal leading-relaxed text-gray-700 max-h-32 overflow-hidden truncate-lines-5">
                {currProject.projectDescription}
              </p>
              <div className="flex justify-center ">
                <Link
                  to={`/project/${currProject._id}`}
                  className="flex items-center gap-2 px-2 md:px-4 py-2 font-bold text-center text-secondary rounded-full hover:bg-gray-700 bg-primary text-sm md:text-xl"
                >
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <SiteLoader />
      )}
    </div>
  );
};

export default Projects;
