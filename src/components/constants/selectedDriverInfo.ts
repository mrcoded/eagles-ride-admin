import { Car, Download, NotebookPen, PhoneCall, User2 } from "lucide-react";

export const selectedDriverInfo = (selectedItemData: {
  car_insurance: string;
  background_check_record: string;
  criminal_record_check: string;
  driver_abstract: string;
  child_intervention_record: string;
}) => {
  return [
    {
      label: "Car Insurance",
      icon: Car,
      value: selectedItemData?.car_insurance,
    },
    {
      label: "Background Check record",
      icon: User2,
      value: selectedItemData?.background_check_record,
    },
    {
      label: "Criminal Record Check",
      icon: PhoneCall,
      value: selectedItemData?.criminal_record_check,
    },
    {
      label: "Driver Abstract",
      icon: Download,
      value: selectedItemData?.driver_abstract,
    },
    {
      label: "Child Intervention Record",
      icon: NotebookPen,
      value: selectedItemData?.child_intervention_record,
    },
  ];
};
