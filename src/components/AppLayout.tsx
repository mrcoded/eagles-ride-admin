import { Outlet } from "react-router-dom";

import Header from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { MobileSidebar } from "@/components/shared/MobileSidebar";

const AppLayout = () => {
  return (
    <ProtectedRoute>
      <div className="flex-1 flex flex-col min-h-screen bg-slate-50 font-sans mb-10 lg:mb-0">
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
  );
};

export default AppLayout;
