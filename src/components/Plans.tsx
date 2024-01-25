import { useState } from "react";
import classNames from "classnames";

import { Summary } from "./Summary";
import { ListOfPlans } from "./ListOfPlans";

import { useDispatch, useSelector } from "../store";
import { navigationActions } from "../store/navigation";

import { IPlan, Option } from "../lib/types";

import { usePlans } from "../hooks/usePlans";

import IconCheckWhite from "../assets/check-white.svg?react";
import IconProtectionLight from "../assets/IconProtectionLight.svg?react";
import IconAddUserLight from "../assets/iconAddUserLight.svg?react";
import IconArrowLeft from "../assets/IconArrowLeft.svg?react";
import { Breadcrumb } from "./Breadcrumb";

export const Plans = () => {
  const dispatch = useDispatch();

  const { currentStep, user } = useSelector((state) => state.navigation);

  const [option, setOption] = useState<Option | null>(null);
  const [planSelected, setPlanSelected] = useState<IPlan | null>(null);

  const { isLoading, plans } = usePlans({ option });

  return (
    <section className="stepper">
      <Breadcrumb />

      {currentStep < 2 && <div className="divider"></div>}

      <div className="stepper__container">
        <div
          className="back"
          onClick={() => dispatch(navigationActions.previousStep())}
        >
          <button>
            <IconArrowLeft color="#4F4FFF" />
          </button>
          <span>Volver</span>
        </div>

        {currentStep === 1 ? (
          <>
            <h1 className="stepper__container--title">
              {user?.name} ¿Para quién deseas cotizar?
            </h1>
            <h6 className="stepper__container--subtitle">
              Selecciona la opción que se ajuste más a tus necesidades.
            </h6>

            <div className="group__options">
              <div
                className={classNames(
                  "option",
                  option === Option.MY_SELF && "option--selected"
                )}
                onClick={() => setOption(Option.MY_SELF)}
              >
                <div
                  className={classNames(
                    "option__check",
                    option === Option.MY_SELF && "option__check--selected"
                  )}
                >
                  {option === Option.MY_SELF && <IconCheckWhite />}
                </div>
                <IconProtectionLight />
                <h1 className="option__title">Para mi</h1>
                <h3 className="option__description">
                  Cotiza tu seguro de salud y agrega familiares si así lo
                  deseas.
                </h3>
              </div>
              <div
                className={classNames(
                  "option",
                  option === Option.FOR_SOMEONE_ELSE && "option--selected"
                )}
                onClick={() => setOption(Option.FOR_SOMEONE_ELSE)}
              >
                <div
                  className={classNames(
                    "option__check",
                    option === Option.FOR_SOMEONE_ELSE &&
                      "option__check--selected"
                  )}
                >
                  {option === Option.FOR_SOMEONE_ELSE && <IconCheckWhite />}
                </div>
                <IconAddUserLight />
                <h1 className="option__title">Para alguien más</h1>
                <h3 className="option__description">
                  Realiza una cotización para uno de tus familiares o cualquier
                  persona.
                </h3>
              </div>
            </div>

            {isLoading ? (
              <div className="loading">Cargando...</div>
            ) : (
              <ListOfPlans plans={plans} setPlanSelected={setPlanSelected} />
            )}
          </>
        ) : (
          user &&
          planSelected &&
          option && <Summary user={user} plan={planSelected} option={option} />
        )}
      </div>
    </section>
  );
};
