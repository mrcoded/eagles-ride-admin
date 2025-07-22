import { TableRowItemProps } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

const TableRowItem = ({
  item,
  type,
  selectedItemId,
  onSelect,
}: TableRowItemProps) => {
  const isBooking = type === "booking";
  const user = isBooking ? item.user : item;

  return (
    <tr className="h-8 text-slate-800 dark:text-slate-100 font-medium border-b last:border-0 hover:bg-gray-100 dark:hover:bg-slate-800">
      <td>
        <Checkbox
          checked={selectedItemId === item._id}
          onCheckedChange={(checked: boolean) =>
            onSelect(checked, user?._id || item._id, item._id)
          }
          className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
        />
      </td>
      <td className="p-2 text-xs text-nowrap">{user?.fullname}</td>
      <td className="p-2 text-[9px] tracking-tight">
        {isBooking ? user?.phone_number : item.email}
      </td>
      <td className="p-1.5 text-[9px] capitalize whitespace-nowrap">
        {isBooking ? item.trip_type : item.phone_number}
      </td>
      <td className="p-1.5 text-[9px] uppercase">
        {isBooking
          ? item.status
          : item.isDriverApproved
          ? "Approved"
          : "Not Approved"}
      </td>
      <td className="p-2 text-[9px] tracking-tight">
        {isBooking ? item.pick_up_location : item.status}
      </td>
      <td className="p-2 text-[9px] tracking-tight">
        {isBooking ? item.drop_off_location : user?.residential_address}
      </td>
    </tr>
  );
};

export default TableRowItem;
