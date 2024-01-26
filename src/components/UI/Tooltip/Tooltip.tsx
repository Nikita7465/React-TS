import React from "react";
import styles from "./tooltip.module.css";

interface TooltipProps {
  text: string;
  textLeft?: boolean;
  textCenter?: boolean;
}

const textSideLeft = {
  justifyContent: "right",
};

const textSideCenter = {
  justifyContent: "center",
};

const Tooltip: React.FC<TooltipProps> = ({ text, textLeft, textCenter }) => {
  let textSide = {};

  if (textLeft) {
    textSide = textSideLeft;
  } else if (textCenter) {
    textSide = textSideCenter;
  }
  return (
    <div className={styles.tooltipWrap} style={textSide}>
      <div className={styles.tooltip}>
        <span>?</span>
      </div>
      <p className={styles.tooltipText}>{text}</p>
    </div>
  );
};

export default Tooltip;
