import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
  useSortBy,
  usePagination,
} from 'react-table';
import { SortDownIcon, SortIcon, SortUpIcon } from '../../assets/svg';

const Table = ({ columns, data }: { columns: any; data: any }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns,
        data,
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    );

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <div className="mt-2 mx-10 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-200"
            >
              <thead className="bg-primary">
                {headerGroups.map((headerGroup: any) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                      // Add the sorting props to control sorting. For this example
                      // we can add them into the header props
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        <div className="flex items-center justify-center">
                          {column.render('Header')}
                          {/* Add a sort direction indicator */}
                          <span className="ml-2 ">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <SortDownIcon className="w-4 h-4 text-gray-400" />
                              ) : (
                                <SortUpIcon className="w-4 h-4 text-gray-400" />
                              )
                            ) : (
                              <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                            )}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row: any) => {
                  prepareRow(row);
                  return (
                    <tr key={row.original.id} {...row.getRowProps()}>
                      {row.cells.map((cell: any) => {
                        return (
                          <>
                            {/* Here added onClick function to get cell value */}
                            <td
                              key={`${cell.column.Header} + '-' + ${cell.row.id}`}
                              // onClick={() => getCellValue(cell)}
                              {...cell.getCellProps()}
                              style={{
                                padding: '10px',
                                border: 'solid 1px gray',
                                // background: 'papayawhip',
                              }}
                            >
                              {cell.render('Cell')}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
