import { useState, type ReactElement, type SubmitEvent } from "react";

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  const changeStep = (index: number, event?: SubmitEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (index < 0 || index >= steps.length) return;

    setCurrentStep(index);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
}
