import { Gauge, NotebookPen, CarFrontIcon } from "lucide-react";

export const selectedCardItems = (
  selectedItemData:
    | {
        schedule?: string;
        status: string;
        trip_type: string;
      }
    | undefined
) => {
  return [
    {
      label: "Schedule",
      icon: Gauge,
      value: selectedItemData?.schedule,
    },
    {
      label: "Booking",
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
