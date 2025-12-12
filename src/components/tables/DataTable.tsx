import Pagination from "@/components/Pagination";
import TableRowItem from "@/components/tables/TableRowItem";
import { TableLoader } from "@/components/TableLoader";

import { DataTableProps, TableType } from "../../types/tables";

import { useGlobalContext } from "@/hooks/useGlobalContext";

import {
  DRIVERS_TABLE_HEADERS,
  RIDES_TABLE_HEADERS,
} from "@/constants/dataTableHeaders";

const DataTable = <T extends TableType>({
  data,
  type,
  isLoading,
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
      <table className="w-full bg-white dark:bg-slate-800 rounded shadow overflow-hidden">
        <thead className="bg-orange-400 dark:bg-orange-600 text-slate-800 dark:text-slate-100 text-xs uppercase">
          <tr>
            {TABLE_HEADERS.map((header, index) => (
              <th key={index} className="p-1.5 text-left whitespace-nowrap">
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
