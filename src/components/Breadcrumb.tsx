import classNames from "classnames";

import { useDispatch, useSelector } from "../store";
import { navigationActions } from "../store/navigation";

import LineDashed from "../assets/line-dashed.svg?react";
import IconArrowLeft from "../assets/IconArrowLeft.svg?react";

export const Breadcrumb = () => {
  const disptach = useDispatch();
  const { currentStep } = useSelector((state) => state.navigation);

  return (
    <>
      <div className="stepper_breadcrumb breadcrumb">
        <div
          className={classNames(
            "breadcrumb__circle",
            currentStep === 1 ? "breadcrumb__circle--selected" : ""
          )}
        >
          1
        </div>
        <h3
          className={classNames(
            "breadcrumb__title",
            currentStep === 1 && "breadcrumb__title--selected"
          )}
        >
          Planes y coberturas
        </h3>
        <LineDashed />
        <div
          className={classNames(
            "breadcrumb__circle",
            currentStep === 2 ? "breadcrumb__circle--selected" : ""
          )}
        >
          2
        </div>
        <h3
          className={classNames(
            "breadcrumb__title",
            currentStep === 2 && "breadcrumb__title--selected"
          )}
        >
          Resumen
        </h3>
      </div>

      <div className="breadcrumb__mobile">
        <button onClick={() => disptach(navigationActions.previousStep())}>
          <IconArrowLeft color="#a9afd9" />
        </button>
        <p>Paso {currentStep} de 2</p>
        <div className="progress">
          <div style={{ width: currentStep === 1 ? "50%" : "100%" }} />
        </div>
      </div>
    </>
  );
};
