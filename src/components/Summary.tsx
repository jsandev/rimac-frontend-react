import Iconfamily from "../assets/Iconfamily.svg?react";

import { IPlan, IUser, Option } from "../lib/types";

interface IProps {
  user: IUser;
  plan: IPlan;
  option: Option;
}
export const Summary: React.FC<IProps> = ({ user, plan, option }) => {
  return (
    <div className="summary-container">
      <h1 className="summary--title">Resumen del seguro </h1>
      <div className="summary">
        <h6>Precios calculados para:</h6>
        <h1>
          <Iconfamily /> {user.name} {user.lastName}
        </h1>

        <div className="separator" />

        <strong>Responsable de pago</strong>
        <p>DNI: {user.nroDocument}</p>
        <p>Celular: {user.phone}</p>
        <strong>Plan elegido</strong>
        <p>{plan.name}</p>
        <p>
          Costo del Plan: $
          {option === Option.FOR_SOMEONE_ELSE
            ? plan.price - plan.price * 0.05
            : plan.price}{" "}
          al mes
        </p>
      </div>
    </div>
  );
};
