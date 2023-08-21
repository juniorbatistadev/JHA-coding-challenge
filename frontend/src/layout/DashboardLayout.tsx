import { Outlet } from "react-router-dom";import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

export default function DashboardLayout() {
  const { user } = useContext(UserContext);
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
        Acme Widgets
        <p>{user?.name.charAt(0)}</p>
      </nav>
      <div className="flex w-full h-full ">
        <div className="w-1/4 bg-sky-800 md:flex h-full hidden">
          <Sidebar />
        </div>
        <main className="w-3/4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
