"use client";

import TableRowItem from "./TableRowItem";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { BookingsTableProps } from "@/types";
import {
  DRIVERS_TABLE_HEADERS,
  RIDES_TABLE_HEADERS,
} from "@/constants/dataTableHeaders";
import { useGlobalContext } from "@/context/GlobalContext";

const DataTable = ({ data, type, isLoading }: BookingsTableProps) => {
  // GET Table headers
  const TABLE_HEADERS =
    type === "booking"
      ? RIDES_TABLE_HEADERS
      : type === "driver"
      ? DRIVERS_TABLE_HEADERS
      : [];

  const {
    selectedItemId,
    setSelectedUserId,
    setSelectedItemId,
    setIsModalOpen,
  } = useGlobalContext();

  // Handle checkbox change
  const handleCheckboxChange = (
    checked: boolean,
    userId: string,
    itemId: string
  ) => {
    if (checked) {
      setSelectedItemId(itemId);
      setSelectedUserId(userId);
      setIsModalOpen(true);
    } else {
      setSelectedItemId(null);
      setSelectedUserId("");
      setIsModalOpen(false);
    }
  };

  return (
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
        {isLoading
          ? Array(10)
              .fill(null)
              .map((_, i) => (
                <tr key={i} className="h-8 border-b">
                  {Array(8)
                    .fill(null)
                    .map((_, idx) => (
                      <td key={idx} className="p-1.5">
                        <Skeleton height={15} />
                      </td>
                    ))}
                </tr>
              ))
          : data?.map((item) => (
              <TableRowItem
                key={item._id}
                item={item}
                type={type}
                selectedItemId={selectedItemId}
                onSelect={handleCheckboxChange}
              />
            ))}
      </tbody>
    </table>
  );
};

export default DataTable;
