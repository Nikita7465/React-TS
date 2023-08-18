import React from "react";
import styles from "./input.module.css";

interface InputProps {
  secondClass?: string;
  type: "text" | "number" | "email" | undefined;
  pText?: string;
  disabled?: boolean;
  lbr?: boolean;
  rbr?: boolean;
}

const leftBR = {
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "0",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "0",
};

const rightBR = {
  borderTopLeftRadius: "0",
  borderTopRightRadius: "5px",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "5px",
};

const Input: React.FC<InputProps> = ({
  pText,
  secondClass,
  type,
  disabled,
  lbr,
  rbr,
}) => {
  let inputStyles = {};

  if (lbr) {
    inputStyles = leftBR;
  } else if (rbr) {
    inputStyles = rightBR;
  }

  return (
    <input
      className={`${styles.input} ${secondClass}`}
      type={type}
      placeholder={pText}
      disabled={disabled}
      style={inputStyles}
    />
  );
};

export default Input;
