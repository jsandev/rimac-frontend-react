import classNames from "classnames";
import { useId } from "react";

type THideBorderRadius = "tl" | "tr" | "bl" | "br";
type THideBorder = "left" | "top" | "bottom" | "right";

interface IProps {
  label: string;
  name: string;
  hideBorderRadius?: THideBorderRadius | THideBorderRadius[];
  hideBorder?: THideBorder | THideBorder[];
  value: string;
  onChange: (v: string) => void;
  hasError?: boolean;
  required?: boolean;
  type?: "text" | "number";
  maxLength?: number;
}
export const Input: React.FC<IProps> = ({
  label,
  name,
  hideBorderRadius,
  hideBorder,
  value,
  onChange,
  hasError = false,
  required,
  type = "text",
  maxLength = undefined,
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
        hideBorder && "no-border-" + hideBorder,
        hasError && "error"
      )}
    >
      {label}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
      />
    </label>
  );
};
