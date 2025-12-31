import Pagination from "@/components/Pagination";
import TableRowItem from "@/components/tables/TableRowItem";
import { TableLoader } from "@/components/TableLoader";

import { DataTableProps, TableType } from "../../types/tables";

import { useGlobalContext } from "@/hooks/useGlobalContext";

import {
  RIDES_TABLE_HEADERS,
  DRIVERS_TABLE_HEADERS,
} from "@/constants/dataTableHeaders";

const DataTable = <T extends TableType>({
  data,
  type,
  isLoading,
  dataError,
}: DataTableProps<T>) => {
  const { currentPage, selectedItemId } = useGlobalContext();

  // Pagination
  const PAGESIZE = 13;
  const startIndex = (currentPage - 1) * PAGESIZE;
  const endIndex = startIndex + PAGESIZE;
  const totalPages = Math.ceil(data.length / PAGESIZE);

  // GET Table headers
  const TABLE_HEADERS =
    type === "booking" ? RIDES_TABLE_HEADERS : DRIVERS_TABLE_HEADERS;

  // Get paginated data
  const paginatedData = data?.slice(startIndex, endIndex);

  return (
    <>
      {/* Display error message if dataError exists */}
      {dataError ? (
        <div className="flex items-center justify-center text-red-500 text-2xl">
          Oops! Something went wrong
        </div>
      ) : data?.length === 0 ? (
        <div className="flex items-center justify-center text-2xl">
          Search Data Not Found!
        </div>
      ) : (
        <table className="w-full rounded shadow overflow-hidden">
          <thead className="bg-orange-400 dark:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs uppercase">
            <tr>
              {TABLE_HEADERS.map((header, index) => (
                <th key={index} className="p-1.5 text-center whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TableLoader />
            ) : (
              paginatedData?.map((item) => (
                <TableRowItem
                  key={item._id}
                  item={item}
                  type={type}
                  selectedItemId={selectedItemId}
                />
              ))
            )}
          </tbody>
        </table>
      )}
      {/* Pagination */}
      {data.length >= 13 && (
        <div className="flex bg-white px-6">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
};

export default DataTable;
