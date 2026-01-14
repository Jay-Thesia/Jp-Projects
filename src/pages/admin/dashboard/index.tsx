import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header';
import { useGetProjectAPI } from '../projects/services/project.service';

const AdminDashboard = () => {
  const [projectCount, setProjectCount] = useState(0);
  const { getProjectAPI } = useGetProjectAPI();

  useEffect(() => {
    (async () => {
      const { data, error } = await getProjectAPI();

      if (error) {
        console.error('Error fetching project count:', error);
        return;
      }

      setProjectCount(Array.isArray(data) ? data.length : 0);
    })();
  }, []);

  return (
    <div className="">
      <Header isAdminView={true} />
      <h1>Total Projects Added : {projectCount}</h1>
      <h1>Total Testimonials Added : {0}</h1>
      <h1>Total Jobs Added : {0}</h1>
    </div>
  );
};

export default AdminDashboard;
