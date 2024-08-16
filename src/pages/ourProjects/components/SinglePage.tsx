import Carousel from 'components/comman/carousel';
import Header from 'components/shared/header';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleProjectAPI } from './services/project.service';
import { ProjectInterface } from 'pages/admin/types';
import HalfHeader from 'components/shared/header/HalfHeader';

const SinglePage = () => {
  const [slides, setSlides] = useState([]);
  const [singleProject, setSingleProject] = useState<ProjectInterface>();

  let { projectId } = useParams();

  let { getSingleProjectAPI, isLoading, isError } = useGetSingleProjectAPI();
  useEffect(() => {
    (async () => {
      let { data: currentProject } = await getSingleProjectAPI(
        {},
        {},
        projectId
      );

      setSlides((prev: any): any =>
        currentProject.projectImages.map((curr: any) => curr.secure_url)
      );
      setSingleProject(currentProject);
    })();
  }, []);

  return (
    <>
      <HalfHeader />
      <div className="relative md-h-screen sm-h-10">
        <Carousel autoSlide={true}>{slides}</Carousel>
      </div>

      <div className="container">
        {' '}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Project Description (8 columns) */}
          <div className="flex-1 lg:basis-2/3 p-4">
            <h2 className="text-2xl font-bold mb-4">Project Description</h2>
            <p className="text-base text-gray-700 indent-5 text-justify">
              {singleProject?.projectDescription}
            </p>
          </div>

          {/* Other Project Details (4 columns) */}
          <div className="flex-1 lg:basis-1/3 p-4 bg-gray-100">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <ul className="list-none text-base text-gray-700 ">
              <li className="mb-4">
                <strong>Project Name:</strong> {singleProject?.projectName}
              </li>

              <li className="mb-4">
                <strong>Project Type:</strong> {singleProject?.projectType}
              </li>

              <li className="mb-4">
                <strong>Contruction Area (sq. ft.):</strong>{' '}
                {singleProject?.projectConstructionArea}
              </li>

              {singleProject?.projectStartDate && (
                <li className="mb-4">
                  <strong>Start Time:</strong> {singleProject?.projectStartDate}
                </li>
              )}
              {singleProject?.projectEndDate && (
                <li className="mb-4">
                  <strong>End Time:</strong> {singleProject?.projectEndDate}
                </li>
              )}
              <li className="mb-4">
                <strong>Location:</strong> {singleProject?.projectLocation}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
