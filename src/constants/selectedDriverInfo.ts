import { Car, Download, NotebookPen, PhoneCall, User2 } from "lucide-react";

export const selectedDriverInfo = (selectedDriver: {
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
      value: selectedDriver?.car_insurance,
    },
    {
      label: "Background Check record",
      icon: User2,
      value: selectedDriver?.background_check_record,
    },
    {
      label: "Criminal Record Check",
      icon: PhoneCall,
      value: selectedDriver?.criminal_record_check,
    },
    {
      label: "Driver Abstract",
      icon: Download,
      value: selectedDriver?.driver_abstract,
    },
    {
      label: "Child Intervention Record",
      icon: NotebookPen,
      value: selectedDriver?.child_intervention_record,
    },
  ];
};
