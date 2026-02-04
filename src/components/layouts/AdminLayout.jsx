import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <aside className="hidden md:flex w-64 bg-primary text-white shadow flex-shrink-0 flex-col">
        <div className="py-6 px-4 font-semibold text-lg border-b">
          HireLink Admin
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/adminboard"
            className="block px-2 py-1 rounded hover:bg-white/10"
          >
            Pipeline Board
          </Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
