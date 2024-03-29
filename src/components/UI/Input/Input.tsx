import React from "react";
import styles from "./input.module.css";

interface InputProps {
  secondClass?: string;
  type: "text" | "password" | "email" | undefined;
  placeholder?: string;
  disabled?: boolean;
  lbr?: boolean;
  rbr?: boolean;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  placeholder,
  secondClass,
  type,
  disabled,
  lbr,
  rbr,
  name,
  value,
  onChange,
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
      placeholder={placeholder}
      disabled={disabled}
      style={inputStyles}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
