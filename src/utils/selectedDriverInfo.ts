import { DriversDataProps } from "@/components/drivers/types";
import { Car, Download, NotebookPen, PhoneCall, User2 } from "lucide-react";

export const selectedDriverInfo = (
  selectedDriver: DriversDataProps | undefined
) => {
  return [
    {
      label: "Car Insurance",
      icon: Car,
      value: selectedDriver?.car_insurance,
    },
    {
      label: "Background Check record",
      icon: User2,
      value: selectedDriver?.background_check,
    },
    {
      label: "Criminal Record Check",
      icon: PhoneCall,
      value: selectedDriver?.criminal_check_rec,
    },
    {
      label: "Driver Abstract",
      icon: Download,
      value: selectedDriver?.driver_abstract,
    },
    {
      label: "Child Intervention Record",
      icon: NotebookPen,
      value: selectedDriver?.child_intervention_rec,
    },
  ];
};
