
const Stepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex justify-between max-w-2xl mx-auto p-4">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={index}
            className="flex-1 cursor-pointer"
            onClick={() => onStepClick && onStepClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") onStepClick(index);
            }}
            aria-current={isActive ? "step" : undefined}
          >
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`
                  flex items-center justify-center
                  w-10 h-10 rounded-full
                  border-2
                  transition-colors duration-300
                  ${
                    isCompleted
                      ? "bg-blue-600 border-blue-600 text-white"
                      : isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-gray-300 text-gray-400"
                  }
                `}
              >
                {isCompleted ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>

              {/* Title */}
              <span
                className={`
                  mt-2 text-sm text-center
                  ${
                    isCompleted
                      ? "text-blue-600"
                      : isActive
                      ? "text-blue-600"
                      : "text-gray-400"
                  }
                `}
              >
                {step.title}
              </span>
            </div>

            {/* Divider */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  absolute top-5 left-full w-full h-0.5
                  bg-gray-300
                  ${
                    isCompleted ? "bg-blue-600" : "bg-gray-300"
                  }
                  translate-x-1/2
                `}
                style={{ width: "calc(100% - 40px)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
