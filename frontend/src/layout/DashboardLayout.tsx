import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <div></div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
