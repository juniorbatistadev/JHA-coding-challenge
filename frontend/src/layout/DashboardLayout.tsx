import { Outlet } from "react-router-dom";import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
export default function DashboardLayout() {
  const { user } = useContext(UserContext);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-300 flex-col shadow">
      <nav className="bg-white p-4 flex items-center justify-between">
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
      <div className="flex h-full ">
        <div className=" w-1/6 bg-sky-500 md:flex h-full hidden">
          <Sidebar />
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
