import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
  style: string;
  type?: "submit" | "reset" | "button";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  style,
  type,
  onClick,
  text,
  children,
}) => (
  <button className={style} type={type} onClick={onClick}>
    {children || text}
  </button>
);

Button.propTypes = {
  style: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Button;
