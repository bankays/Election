import { ButtonType } from "../types";
import "./index.scss";

const Button = ({ children, ...props }: ButtonType) => {
  return <button {...props}>{children}</button>;
};

export { Button };
