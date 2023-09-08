import React from "react";
import styles from "./btn.module.css";

interface BtnProps {
  btnText: string;
  secondClass?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
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

const Btn: React.FC<BtnProps> = ({
  btnText,
  secondClass,
  type,
  onClick,
  disabled,
  lbr,
  rbr,
}) => {
  let btnStyles = {};

  if (lbr) {
    btnStyles = leftBR;
  } else if (rbr) {
    btnStyles = rightBR;
  }
  return (
    <button
      className={`${styles.btn} ${secondClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={btnStyles}
    >
      {btnText}
    </button>
  );
};

export default Btn;
