"use client";

import { useState } from "react";
import TableRowItem from "./TableRowItem";

import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { BookingsTableProps } from "@/types";
import {
  DRIVERS_TABLE_HEADERS,
  RIDES_TABLE_HEADERS,
} from "@/constants/dataTableHeaders";

const DataTable = ({
  data,
  type,
  selectedItemId,
  setSelectedUserId,
  setSelectedItemId,
  setUserModalOpen,
  onDelete,
  isLoading,
}: BookingsTableProps) => {
  // GET Table headers
  const TABLE_HEADERS =
    type === "booking"
      ? RIDES_TABLE_HEADERS
      : type === "driver"
      ? DRIVERS_TABLE_HEADERS
      : [];

  const [deletingId, setDeletingId] = useState<string | null>(null);
  console.log(data);
  // Handle checkbox change
  const handleCheckboxChange = (
    checked: boolean,
    userId: string,
    itemId: string
  ) => {
    if (checked) {
      setSelectedItemId(itemId);
      setSelectedUserId(userId);
      setUserModalOpen(true);
    } else {
      setSelectedItemId(null);
      setSelectedUserId("");
      setUserModalOpen(false);
    }
  };

  // Confirm and delete action
  const ConfirmandDeleteHandler = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirm) return;

    setDeletingId(id);
    try {
      await onDelete(id);
      toast.success("Deleted successfully.");
    } catch (error: any) {
      toast.error("Delete failed: " + error?.message || "Unexpected error");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <table className="w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-200 text-gray-700 text-sm uppercase">
        <tr>
          {TABLE_HEADERS.map((header, index) => (
            <th key={index} className="p-1.5 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array(5)
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
                onDelete={() => ConfirmandDeleteHandler(item._id)}
                isDeleting={deletingId === item._id}
              />
            ))}
      </tbody>
    </table>
  );
};

export default DataTable;
