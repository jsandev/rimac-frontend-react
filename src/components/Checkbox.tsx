import classNames from "classnames";
import IconCheck from "../assets/check-white.svg?react";

interface IProps {
  label: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Checkbox: React.FC<IProps> = ({ checked, setChecked, label }) => {
  return (
    <div className="checkbox" onClick={() => setChecked((v) => !v)}>
      <div
        className={classNames(
          "checkbox__box",
          checked ? "checkbox__box--checked" : ""
        )}
      >
        {checked && <IconCheck width={16} height={16} />}
      </div>
      <p className="checkbox__label">{label}</p>
    </div>
  );
};
