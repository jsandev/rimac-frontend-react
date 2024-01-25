import { useEffect, useState } from "react";
import classNames from "classnames";

import { Button } from "./Button";

import LineDashed from "../assets/line-dashed.svg?react";
import IconCheckWhite from "../assets/check-white.svg?react";
import IconProtectionLight from "../assets/IconProtectionLight.svg?react";
import IconAddUserLight from "../assets/iconAddUserLight.svg?react";
import IconHomeLight from "../assets/IconHomeLight.svg?react";
import IconArrowLeft from "../assets/IconArrowLeft.svg?react";
import Iconfamily from "../assets/Iconfamily.svg?react";

interface IPlan {
  age: number;
  description: string[];
  name: string;
  price: number;
}

export const Plans = () => {
  const [option, setOption] = useState<"MY_SELF" | "FOR_SOMEONE_ELSE" | null>(
    null
  );
  const [plans, setPlans] = useState<IPlan[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const url =
          "https://rimac-front-end-challenge.netlify.app/api/plans.json";
        const res = await fetch(url);
        const data = await res.json();
        setPlans(data.list as IPlan[]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <section className="stepper">
      <div className="stepper_breadcrumb breadcrumb">
        <div className="breadcrumb__circle breadcrumb__circle--selected">1</div>
        <h3 className="breadcrumb__title breadcrumb__title--selected">
          Planes y coberturas
        </h3>
        <LineDashed />
        <div className="breadcrumb__circle">2</div>
        <h3 className="breadcrumb__title">Resumen</h3>
      </div>

      <div className="breadcrumb__mobile">
        <button>
          <IconArrowLeft color="#a9afd9" />
        </button>
        <p>Paso 1 de 2</p>
        <div className="progress">
          <div />
        </div>
      </div>

      <div className="divider"></div>

      <div className="stepper__container">
        <div className="back">
          <button>
            <IconArrowLeft color="#4F4FFF" />
          </button>
          <span>Volver</span>
        </div>
        <h1 className="stepper__container--title">
          Rocío ¿Para quién deseas cotizar?
        </h1>
        <h6 className="stepper__container--subtitle">
          Selecciona la opción que se ajuste más a tus necesidades.
        </h6>

        <div className="group__options">
          <div
            className={classNames(
              "option",
              option === "MY_SELF" && "option--selected"
            )}
            onClick={() => setOption("MY_SELF")}
          >
            <div
              className={classNames(
                "option__check",
                option === "MY_SELF" && "option__check--selected"
              )}
            >
              {option === "MY_SELF" && <IconCheckWhite />}
            </div>
            <IconProtectionLight />
            <h1 className="option__title">Para mi</h1>
            <h3 className="option__description">
              Cotiza tu seguro de salud y agrega familiares si así lo deseas.
            </h3>
          </div>
          <div
            className={classNames(
              "option",
              option === "FOR_SOMEONE_ELSE" && "option--selected"
            )}
            onClick={() => setOption("FOR_SOMEONE_ELSE")}
          >
            <div
              className={classNames(
                "option__check",
                option === "FOR_SOMEONE_ELSE" && "option__check--selected"
              )}
            >
              {option === "FOR_SOMEONE_ELSE" && <IconCheckWhite />}
            </div>
            <IconAddUserLight />
            <h1 className="option__title">Para alguien más</h1>
            <h3 className="option__description">
              Realiza una cotización para uno de tus familiares o cualquier
              persona.
            </h3>
          </div>
        </div>

        <div className="list__plans">
          {plans.map((plan, i) => {
            const { description, name, price } = plan;
            return (
              <div key={i} className="plan">
                <div className="plan__header">
                  <div className="group">
                    <h1 className="group__name">{name}</h1>
                    <h6 className="group__h6">COSTO DEL PLAN</h6>
                    <span className="group__price">${price} al mes</span>
                  </div>
                  <IconHomeLight />
                </div>

                <div className="plan__separator" />

                <ul>
                  {description.map((string, index) => (
                    <li key={index}>{string}</li>
                  ))}
                </ul>

                <Button
                  color="secondary"
                  title="Seleccionar Plan"
                  onClick={() => null}
                />
              </div>
            );
          })}
        </div>

        <div className="summary-container">
          <h1 className="summary--title">Resumen del seguro </h1>
          <div className="summary">
            <h6>Precios calculados para:</h6>
            <h1>
              <Iconfamily /> Rocio Miranda Díaz
            </h1>

            <div className="separator" />

            <strong>Responsable de pago</strong>
            <p>DNI: 444888888</p>
            <p>Celular: 5130216147</p>
            <strong>Plan elegido</strong>
            <p>Plan en Casa y Clínica</p>
            <p>Costo del Plan: $99 al mes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
