import React from 'react';
import Header from 'components/shared/header';

const AdminClients = () => {
  return (
    <>
      <Header isAdminView={true} />
      <div className="mt-10 mx-10">
        <h1 className="text-2xl mb-4">Client Data</h1>
        {/* TODO: Add clients table / forms here */}
        <p className="text-gray-600">No clients configured yet.</p>
      </div>
    </>
  );
};

export default AdminClients;

