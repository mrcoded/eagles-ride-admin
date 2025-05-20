import { type LucideIcon } from "lucide-react";
import { selectedCardItems } from "./constants/selectedCardItems";

function SelectedItemCard({
  selectedItemData,
}: {
  selectedItemData:
    | {
        schedule?: string;
        status: string;
        trip_type: string;
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
            className="flex flex-col items-center p-1.5 bg-purple-500 w-12 h-[50px] rounded-md"
          >
            <div className="flex items-center justify-center bg-purple-400 w-5 h-5 rounded-full">
              <item.icon className="size-2.5 stroke-orange-300" />
            </div>
            <p className="text-[4px] mt-1 text-slate-200">{item.label}</p>
            <p className="font-bold text-[5px] text-slate-200 capitalize">
              {item?.value}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default SelectedItemCard;
