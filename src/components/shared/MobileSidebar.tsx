import SidebarNavItems from "./SidebarNavItems";
import { useGlobalContext } from "@/hooks/useGlobalContext";

export function MobileSidebar() {
  const { sidebarOpen, setSidebarOpen } = useGlobalContext();

  return (
    <>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div
          className="w-2/3 sm:w-1/2 fixed inset-0 bg-black z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <div className="h-full bg-slate-900">
            <SidebarNavItems />
          </div>
        </div>
      )}
    </>
  );
}
