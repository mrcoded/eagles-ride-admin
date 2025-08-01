import SidebarNavItems from "./SidebarNavItems";
import { useGlobalContext } from "@/context/GlobalContext";

export function MobileSidebar() {
  const { sidebarOpen, setSidebarOpen } = useGlobalContext();

  return (
    <>
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <SidebarNavItems />
        </div>
      )}
    </>
  );
}
