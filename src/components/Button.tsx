import classNames from "classnames";

interface IProps {
  title: string;
  onClick: () => void;
  className?: string;
}
export const Button: React.FC<IProps> = ({ title, onClick }) => {
  return (
    <button className={classNames("button", classNames)} onClick={onClick}>
      {title}
    </button>
  );
};
