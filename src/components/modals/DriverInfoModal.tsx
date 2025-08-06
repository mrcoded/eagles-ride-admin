import { LucideIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

function DriverInfoModal({
  driverInfo,
}: {
  driverInfo: { label: string; value: string; icon: LucideIcon }[];
}) {
  return (
    <>
      {driverInfo.map((item) => (
        <div
          key={item.label}
          className="flex justify-between items-center mb-0.5 py-0.5 lg:py-1.5 px-2 bg-primary dark:bg-orange-600 rounded-sm w-full"
        >
          <p className="flex gap-1 items-center text-slate-100 text-[9px] font-medium">
            <item.icon className="size-2.5 lg:size-3 stroke-slate-200" />
            {item.label}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-slate-200 text-[8px] lg:text-[9px] underline font-medium">
                View
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-slate-400 dark:text-slate-200 text-base font-medium">
                  {item.label}
                </DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <img
                  src={item.value}
                  alt={item.label}
                  width="100%"
                  className="w-full"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  );
}

export default DriverInfoModal;
