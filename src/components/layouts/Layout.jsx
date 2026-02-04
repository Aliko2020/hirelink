import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    
    <main className="flex-1 mx-auto w-full">
      <Outlet />
    </main>

  </div>
);

export default Layout;
