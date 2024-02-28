import React from "react";
import styles from "./modal.module.css";
import Btn from "../Btn/Btn";

interface ModalProps {
  text: string;
  type: "alert" | "confirm";
  onCancel: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({ text, type, onCancel, onConfirm }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.blackout} onClick={onCancel}>
      <div className={styles.modal} onClick={handleModalClick}>
        <p className={styles.text}>{text}</p>
        {type === "alert" && (
          <div className={styles.btnsWrap}>
            <Btn btnText="OK" onClick={onCancel} />
          </div>
        )}
        {type === "confirm" && (
          <div className={styles.btnsWrap}>
            <Btn btnText="Cancel" onClick={onCancel} />
            <Btn btnText="Ok" onClick={onConfirm} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
