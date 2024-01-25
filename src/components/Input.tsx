import classNames from "classnames";
import { useId } from "react";

type THideBorderRadius = "tl" | "tr" | "bl" | "br";
type THideBorder = "left" | "top" | "bottom" | "right";

interface IProps {
  label: string;
  name: string;
  hideBorderRadius?: THideBorderRadius | THideBorderRadius[];
  hideBorder?: THideBorder | THideBorder[];
}
export const Input: React.FC<IProps> = ({
  label,
  name,
  hideBorderRadius,
  hideBorder,
}) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={classNames(
        "input",
        hideBorderRadius && Array.isArray(hideBorderRadius)
          ? hideBorderRadius.map((v) => "no-radius-" + v).join(" ")
          : hideBorderRadius,
        hideBorder && "no-border-" + hideBorder
      )}
    >
      {label}
      <input type="text" name={name} id={id} />
    </label>
  );
};
