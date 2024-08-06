import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  createColumnHelper,
} from '@tanstack/react-table';
import Header from 'components/shared/header';

const AdminDashboard = () => {
  const columns = [
    {
      accessorKey: 'id',
      Header: 'ID',
    },
    {
      accessorKey: 'name',
      Header: 'Name',
      Cell: ({ row }: any) => row.original.name.toUpperCase(), // Example of custom cell rendering
    },
    {
      accessorKey: 'email',
      Header: 'Email',
    },
  ];

  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    // ... more data objects
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
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
