import { SelectedItemCardProps } from "@/types";

import { useGlobalContext } from "@/hooks/useGlobalContext";
import { selectedCardItems } from "@/constants/selectedCardItems";

function SelectedItemCard() {
  const { selectedRideData } = useGlobalContext();

  //Get selected item data
  const selectedItemData = selectedRideData as Partial<SelectedItemCardProps>;
  const cardItems = selectedCardItems(selectedItemData);

  return (
    <div className="hidden items-center justify-center sm:flex">
      <div className="grid grid-cols-3 gap-2 py-1">
        {cardItems.map((item, label) => (
          <div
            key={label}
            className="flex flex-col items-center p-2 bg-orange-500 dark:bg-orange-600 w-20 h-20 rounded-md"
          >
            <div className="flex items-center justify-center bg-slate-100 size-6 rounded-full">
              <item.icon className="size-4 stroke-orange-600" />
            </div>
            <p className="text-xs font-medium mt-1 text-slate-50 tracking-wide">
              {item.label}
            </p>
            <p className="font-semibold text-[10px] text-slate-100 capitalize">
              {item?.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedItemCard;
