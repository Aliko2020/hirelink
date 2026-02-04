import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../../store/applicationSlice";
import { steps } from "./steps/steps";
import Stepper from "../ui/Stepper";
import Hero from "../ui/Hero";

export default function MultiStepForm() {
  const dispatch = useDispatch();

  const { currentStep, jobTitle } = useSelector((state) => state.application);

  return (
    <div className="">
      <Hero title={`${jobTitle}`} />
      <div className="max-w-sm mx-auto mt-4">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={(step) =>
            dispatch(step < currentStep ? prevStep() : nextStep())
          }
        />

        <main className="border rounded-md">{steps[currentStep].component}</main>
      </div>
    </div>
  );
}
