import { Link } from "react-router-dom";

const Button = ({ to, label = "Apply now" }) => {
  return (
    <Link
      to={to}
      className="
        inline-flex items-center justify-center
        rounded-md bg-blue-600 px-4 py-2
        text-sm font-medium text-white shadow-sm
        transition-all hover:bg-blue-700 hover:shadow
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
      "
    >
      {label} →
    </Link>
  );
};

export default Button;
