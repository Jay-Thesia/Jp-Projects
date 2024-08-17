import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  createColumnHelper,
} from '@tanstack/react-table';
import Header from 'components/shared/header';

const AdminDashboard = () => {
  return (
    <div className="">
      <Header isAdminView={true} />
      <h1>Total Projects Added : {0}</h1>
      <h1>Total Testimonials Added : {0}</h1>
      <h1>Total Jobs Added : {0}</h1>
    </div>
  );
};

export default AdminDashboard;
