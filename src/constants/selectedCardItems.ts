import { SelectedItemCardProps } from "@/types";
import { Gauge, NotebookPen, CarFrontIcon } from "lucide-react";

export const selectedCardItems = (selectedItemData: SelectedItemCardProps) => {
  return [
    {
      label: "Schedule",
      icon: Gauge,
      value: selectedItemData?.schedule_type,
    },
    {
      label: "Status",
      icon: NotebookPen,
      value: selectedItemData?.status,
    },
    {
      label: "Trip Type",
      icon: CarFrontIcon,
      value: selectedItemData?.trip_type,
    },
  ];
};
