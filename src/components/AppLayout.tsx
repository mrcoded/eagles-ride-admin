import { Outlet } from "react-router-dom";

import { useScreenResize } from "@/hooks/useScreenResize";

import Header from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { MobileSidebar } from "@/components/shared/MobileSidebar";

const AppLayout = () => {
  // Check for mobile view
  const isMobileView = useScreenResize();

  return (
    <>
      {isMobileView ? (
        <p className="flex h-screen px-3 justify-center items-center text-sm text-red-600">
          Sorry! You cannot access this page on mobile view.
        </p>
      ) : (
        <ProtectedRoute>
          <div className="flex-1 flex flex-col min-h-screen bg-slate-50 dark:bg-dark-100 font-sans mb-10 lg:mb-0">
            {/* SIDEBAR  */}
            <div className="bg-white shadow">
              <Sidebar />
              <MobileSidebar />
            </div>

            {/* MAIN CONTENT  */}
            <div className="lg:pl-56 xl:pl-64 overflow-hidden">
              <Header />

              <main className="flex flex-1 p-4 lg:px-6">
                <Outlet />
              </main>
            </div>
          </div>
        </ProtectedRoute>
      )}
    </>
  );
};

export default AppLayout;
