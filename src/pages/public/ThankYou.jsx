import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 9000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="rounded-lg p-8 text-center">
        <h2 className="mb-2 text-2xl font-semibold text-green-600">
          Thank you!
        </h2>
        <p className="">
          Your application has been submitted.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Redirecting to home...
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
