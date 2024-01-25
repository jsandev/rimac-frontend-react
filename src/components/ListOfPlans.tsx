import { Button } from "./Button";

import { IPlan } from "../lib/types";

import { navigationActions } from "../store/navigation";
import { useDispatch } from "../store";

import IconHomeLight from "../assets/IconHomeLight.svg?react";

interface IProps {
  plans: IPlan[];
  setPlanSelected: React.Dispatch<React.SetStateAction<IPlan | null>>;
}
export const ListOfPlans: React.FC<IProps> = ({ plans, setPlanSelected }) => {
  const dispatch = useDispatch();
  return (
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
              onClick={() => {
                dispatch(navigationActions.nextStep());
                setPlanSelected(plan);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
