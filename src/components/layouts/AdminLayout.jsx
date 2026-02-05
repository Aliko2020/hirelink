import AdminSidebar from "../ui/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        <Outlet />
      </main>
    </div>
  );
}
