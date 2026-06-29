//#region Static
import "./App.css";
//#endregion

//#region  react-icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
//#endregion

//#region Components
import UserForm from "./components/UserForm";
import ReviewForm from "./components/Review/ReviewForm";
import FinalThanks from "./components/FinalThanks/FinalThanks";
import Steps from "./components/Steps/Steps";
//#endregion

//#region Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";
//#endregion

type FormFields = {
  name: string;
  email: string;
  review: string;
  comment: string;
};

function App() {
  const formTemplate: FormFields = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };

  const [data, setData] = useState<FormFields>(formTemplate);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <FinalThanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formComponents);

  const resetForm = () => {
    alert("Formulário enviado com sucesso!");
    setData(formTemplate);
    changeStep(0);
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {isLastStep ? (
              <button type="button" onClick={() => resetForm()}>
                <span>Enviar</span>
                <FiSend />
              </button>
            ) : (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
