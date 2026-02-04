import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-center text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-2 font-medium underline"
      >
        Go back to Jobs
      </Link>
    </div>
  );
}
