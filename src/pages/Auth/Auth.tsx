import React, { useState } from "react";
import styles from "./auth.module.css";
import Input from "../../components/ui/Input/Input";
import Tooltip from "../../components/ui/Tooltip/Tooltip";
import Btn from "../../components/ui/Btn/Btn";
import { NavLink } from "react-router-dom";

const Auth = () => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="container">
      <div className={styles.auth}>
        <div className={styles.authCard}>
          <h1 className={styles.authTitle}>Authorization</h1>

          <form className={styles.authForm}>
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

            <Btn btnText="Submit" />

            <NavLink to={"/reg"} className={styles.regLink}>
              No account?
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
