import { LucideIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function DriverInfo({
  item,
}: {
  item: {
    label: string;
    value: string;
    icon: LucideIcon;
  };
}) {
  return (
    <div
      key={item.label}
      className="flex justify-between items-center gap-0.5 py-0.5 px-2 bg-purple-500 rounded-sm w-full"
    >
      <p className="flex gap-1 items-center text-slate-200 text-[8px] font-medium">
        <item.icon className="size-2.5 stroke-orange-300" />
        {item.label}
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-slate-200 text-[6px] underline font-medium">
            View
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-slate-400 text-base font-medium">
              {item.label}
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
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
  );
}

export default DriverInfo;
