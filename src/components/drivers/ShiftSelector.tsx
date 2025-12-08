import { Checkbox } from "@/components/ui/checkbox";
import { useHandleCheckboxChange } from "@/hooks/useHandleCheckbox";
import { ShiftSelectorProps } from "../bookings/types";

function ShiftSelector({ shift, setShift, setItemId }: ShiftSelectorProps) {
  // Handle checkbox change
  const checkboxHandler = useHandleCheckboxChange(setItemId);

  return (
    <div className="flex items-center gap-2 p-2 w-full">
      <span className="font-sm font-semibold">Shift - </span>
      <span className="flex items-center">
        <Checkbox
          checked={shift === "morning"}
          onCheckedChange={(checked: boolean) => {
            checkboxHandler(checked, "", "morning");
            setShift("morning");
          }}
          className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
        />
        Morning{" "}
      </span>
      <span className="flex items-center">
        <Checkbox
          checked={shift === "afternoon"}
          onCheckedChange={(checked: boolean) => {
            checkboxHandler(checked, "", "afternoon");
            setShift("afternoon");
          }}
          className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
        />
        Afternoon{" "}
      </span>
      <span className="flex items-center">
        <Checkbox
          checked={shift === null}
          onCheckedChange={(checked: boolean) => {
            checkboxHandler(checked, "", "both");
            setShift(null);
          }}
          className="m-1.5 size-4 border-[1.5px] hover:border-primary focus:border-primary"
        />
        Both{" "}
      </span>
    </div>
  );
}

export default ShiftSelector;
