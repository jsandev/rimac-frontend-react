import { useId } from "react";
import IconArrowDown from "../assets/arrow-down.svg?react";
import classNames from "classnames";

type THideBorderRadius = "tl" | "tr" | "bl" | "br";
interface IProps {
  hideBorderRadius?: THideBorderRadius | THideBorderRadius[];
}
export const Select: React.FC<IProps> = ({ hideBorderRadius }) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={classNames(
        "select",
        hideBorderRadius && Array.isArray(hideBorderRadius)
          ? hideBorderRadius.map((v) => "no-radius-" + v).join(" ")
          : hideBorderRadius
      )}
    >
      <IconArrowDown className="select__arrow" />
      <select name="" id={id}>
        <option value="DNI">DNI</option>
      </select>
    </label>
  );
};
