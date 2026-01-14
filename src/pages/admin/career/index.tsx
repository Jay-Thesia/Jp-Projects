import React from 'react';
import Header from 'components/shared/header';

const AdminCareer = () => {
  return (
    <>
      <Header isAdminView={true} />
      <div className="mt-10 mx-10">
        <h1 className="text-2xl mb-4">Job Listings</h1>
        {/* TODO: Add jobs table / forms here */}
        <p className="text-gray-600">No jobs posted yet.</p>
      </div>
    </>
  );
};

export default AdminCareer;

