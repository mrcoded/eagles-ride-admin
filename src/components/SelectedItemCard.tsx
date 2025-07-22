import { type LucideIcon } from "lucide-react";
import { selectedCardItems } from "../constants/selectedCardItems";

function SelectedItemCard({
  selectedItemData,
}: {
  selectedItemData:
    | {
        status: string;
        trip_type: string;
        schedule?: string;
      }
    | undefined;
}) {
  const cardItems = selectedCardItems(selectedItemData);

  return (
    <div className="grid grid-cols-3 gap-1.5 p-1">
      {cardItems.map(
        (
          item: {
            label: string;
            icon: LucideIcon;
            value?: string;
          },
          label
        ) => (
          <div
            key={label}
            className="flex flex-col items-center p-2 bg-orange-500 dark:bg-orange-600 w-16 h-16 rounded-md"
          >
            <div className="flex items-center justify-center bg-slate-100 size-5 rounded-full">
              <item.icon className="size-3 stroke-orange-600" />
            </div>
            <p className="text-[8px] mt-1 text-slate-50 tracking-wide">
              {item.label}
            </p>
            <p className="font-bold text-[7px] text-slate-100 capitalize">
              {item?.value}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default SelectedItemCard;
