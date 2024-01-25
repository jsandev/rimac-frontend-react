import classNames from "classnames";

interface IProps {
  title: string;
  onClick: () => void;
  className?: string;
  color?: "primary" | "secondary";
}
export const Button: React.FC<IProps> = ({
  title,
  onClick,
  color = "primary",
}) => {
  return (
    <button
      className={classNames(
        "button",
        color === "secondary" ? "button--secondary" : "",
        classNames
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
