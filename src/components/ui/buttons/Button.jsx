import { Link } from "react-router-dom";

const Button = ({ to, label, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick} 
      className="
        inline-flex items-center justify-center text-[#0f2385]
        text-sm font-medium 
      "
    >
      {label} →
    </Link>
  );
};

export default Button;
