import React, { useState } from "react";
import styles from "./reg.module.css";
import Tooltip from "../../components/ui/Tooltip/Tooltip";
import Input from "../../components/ui/Input/Input";
import Btn from "../../components/ui/Btn/Btn";
import { NavLink } from "react-router-dom";

const Reg = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const showPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  return (
    <div className="main-wrap">
      <div className={styles.reg}>
        <div className={styles.regCard}>
          <h1 className={styles.regTitle}>Registration</h1>

          <form className={styles.regForm}>
            <div className={styles.inputWrap}>
              <Input placeholder="Username" type="text" />
              <Tooltip text="Enter your username" textLeft={true} />
            </div>

            <div className={styles.inputWrap}>
              <Input placeholder="Email" type="email" />
              <Tooltip text="Enter your email" textLeft={true} />
            </div>

            <div className={styles.inputWrap}>
              <Input
                placeholder="Password"
                type={isShowPassword ? "text" : "password"}
                secondClass={styles.passInput}
              />
              <label className={styles.eyeLabel}>
                <input type="checkbox" className={styles.checkPassShow} />
                <div className={styles.eye} onClick={showPassword}></div>
              </label>
              <Tooltip text="Enter your password" textLeft={true} />
            </div>

            <div className={styles.inputWrap}>
              <Input
                placeholder="Confirm Password"
                type={isShowPassword ? "text" : "password"}
              />
              <Tooltip text="Enter your password again" textLeft={true} />
            </div>

            <Btn btnText="Submit" />

            <NavLink to={"/auth"} className={styles.authLink}>
              Have an account?
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg;
