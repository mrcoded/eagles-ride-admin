import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

interface CommonItem {
  _id: string;
  fullname: string;
  [key: string]: any;
}

interface TableRowItemProps {
  item: CommonItem;
  type: "booking" | "driver";
  selectedItemId: string | null;
  onSelect: (checked: boolean, userId: string, itemId: string) => void;
  onDelete: (itemId: string) => void;
  isDeleting: boolean;
}

const TableRowItem = ({
  item,
  type,
  selectedItemId,
  onSelect,
  onDelete,
  isDeleting,
}: TableRowItemProps) => {
  const isBooking = type === "booking";
  const user = isBooking ? item.user : item;

  return (
    <tr className="h-8 border-b last:border-0 hover:bg-gray-100">
      <td>
        <Checkbox
          checked={selectedItemId === item._id}
          onCheckedChange={(checked: boolean) =>
            onSelect(checked, user?._id || item._id, item._id)
          }
          className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
        />
      </td>
      <td className="p-1.5 text-[11px] text-nowrap tracking-tight font-medium">
        {user?.fullname}
      </td>
      <td className="p-1.5 text-[8px] tracking-tight">
        {isBooking ? item.status : item.email}
      </td>
      <td className="p-1.5 text-[8px] tracking-tight capitalize">
        {isBooking ? item.trip_type : item.phone_number}
      </td>
      <td className="p-1.5 text-[8px] tracking-tight">
        {isBooking
          ? item.start_date
          : item.isDriverApproved
          ? "Approved"
          : "Not Approved"}
      </td>
      <td className="p-1.5 text-[8px] tracking-tight">
        {isBooking ? item.pick_up_location : item.status}
      </td>
      <td className="p-1.5 text-[8px] tracking-tight">
        {isBooking ? item.drop_off_location : user?.fullname}
      </td>
      <td className="p-1.5">
        <button
          onClick={() => onDelete(item._id)}
          className="text-red-600 hover:text-red-800"
        >
          <Trash className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
};

export default TableRowItem;
