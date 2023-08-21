import { Outlet } from "react-router-dom";import Sidebar from "../components/Sidebar";
import { useState } from "react";
import AvatarChar from "../components/AvatarChar";

export default function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-300 flex-col shadow">
      <nav className="md:hidden flex bg-white p-4 flex items-center justify-between">
        <p
          className="md:hidden flex"
          onClick={() => setMobileSidebarOpen((prev) => !prev)}
        >
          |||
        </p>
        {mobileSidebarOpen && (
          <Sidebar mobile={true} close={() => setMobileSidebarOpen(false)} />
        )}
        <p className="font-bold text-slate-700">Acme Widgets</p>
        <AvatarChar />
      </nav>
      <div className="flex w-full h-full ">
        <div className="w-1/4 bg-sky-800 md:flex h-full hidden">
          <Sidebar />
        </div>
        <main className="flex p-5 w-full md:w-3/4 overflow-y-auto  sm:px-20 sm:pt-10  bg-slate-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
