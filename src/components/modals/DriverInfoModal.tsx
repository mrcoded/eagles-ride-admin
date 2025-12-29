import { useGlobalContext } from "@/hooks/useGlobalContext";
import { selectedDriverInfo } from "@/utils/selectedDriverInfo";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DriverInfoModal() {
  const { selectedDriverData } = useGlobalContext();

  // GET driver info
  const driverInfo = selectedDriverInfo(selectedDriverData);

  // Helper to check if document is a pdf file
  const isPdf = (url: string) => url?.toLowerCase().endsWith(".pdf");

  return (
    <>
      {driverInfo?.map((item) => (
        <div
          key={item.label}
          className="flex justify-between items-center py-1.5 px-2 bg-primary dark:bg-orange-600 rounded-sm w-full"
        >
          <p className="flex gap-2.5 items-center justify-center text-slate-100 text-xs sm:text-sm font-medium">
            <item.icon className="size-2.5 lg:size-4 stroke-slate-200" />
            <>{item.label}</>
          </p>
          <Dialog>
            <DialogTrigger className="text-slate-50 text-[10px] lg:text-xs hover:underline font-medium">
              View
            </DialogTrigger>

            {/* Driver's documents modal */}
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-[#222b45] dark:text-slate-200 text-base font-medium">
                  {item.label}
                </DialogTitle>
                <DialogDescription>
                  This is the required document upload for {item.label}.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                {item.value ? (
                  <>
                    {isPdf(item.value) ? (
                      <div className="w-full flex flex-col gap-2">
                        {/* 1. The PDF Viewer */}
                        <iframe
                          src={`${item.value}#toolbar=0`}
                          className="w-full h-[400px] rounded-md border border-slate-200"
                          title={item.label}
                        />
                        {/* Fallback for opening PDF in a new tab using a link */}
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs sm:text-sm text-primary hover:underline text-center font-medium"
                        >
                          Open PDF in new tab
                        </a>
                      </div>
                    ) : (
                      //for Images
                      <img
                        src={item.value}
                        alt={item.label}
                        className="w-full rounded-md object-contain"
                      />
                    )}
                  </>
                ) : (
                  <p className="text-[#222b45] text-sm font-medium">
                    {item.label} document not yet uploaded.
                  </p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  );
}

export default DriverInfoModal;
