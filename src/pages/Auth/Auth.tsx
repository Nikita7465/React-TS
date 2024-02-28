import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./auth.module.css";
import Input from "../../components/ui/Input/Input";
import Tooltip from "../../components/ui/Tooltip/Tooltip";
import Btn from "../../components/ui/Btn/Btn";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/ui/Modal/Modal";
import Loader from "../../components/ui/Loader/Loader";

interface UserData {
  email: string;
  password: string;
}

const Auth = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [isFieldsEmpty, setIsFieldsEmpty] = useState<boolean>(false);

  const [isUserDataCorrect, setIsUserDataCorrect] = useState(true);

  const [isLoaderShow, setIsLoaderShow] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const switchModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (userData.email.trim() !== "" && userData.password.trim() !== "") {
        setIsLoaderShow(true);
        setIsUserDataCorrect(true);

        const response = await axios.post(
          "http://localhost:3000/auth",
          userData
        );

        if (response.status === 200) {
          const { jwt, userData } = response.data.user;

          Cookies.set("token", jwt, { expires: 30 });
          Cookies.set("username", userData.username, { expires: 30 });
          Cookies.set("email", userData.email, { expires: 30 });

          navigate("/");
        } else {
          switchModal();
          throw new Error("Failed to authorization user");
        }
      } else {
        setIsFieldsEmpty(true);
      }
    } catch (error) {
      setIsUserDataCorrect(false);
      console.error("Error authorization user:", error);
    } finally {
      setIsLoaderShow(false);
    }
  };

  return (
    <div className="container">
      <div className={styles.auth}>
        <div className={styles.authCard}>
          <h1 className={styles.authTitle}>Authorization</h1>

          <form className={styles.authForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <span className={styles.validationText}>
                {isFieldsEmpty && "Enter your email"}
                {!isUserDataCorrect && "Incorrect email or password"}
              </span>
              <div className={styles.inputWrap}>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                <Tooltip text="Enter your email" textLeft={true} />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <span className={styles.validationText}>
                {isFieldsEmpty && "Enter your password"}
                {!isUserDataCorrect && "Incorrect email or password"}
              </span>
              <div className={styles.inputWrap}>
                <Input
                  placeholder="Password"
                  type={isShowPassword ? "text" : "password"}
                  secondClass={styles.passInput}
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <label className={styles.eyeLabel}>
                  <input type="checkbox" className={styles.checkPassShow} />
                  <div className={styles.eye} onClick={showPassword}></div>
                </label>
                <Tooltip text="Enter your password" textLeft={true} />
              </div>
            </div>

            <Btn btnText="Submit" />

            <NavLink to={"/register"} className={styles.regLink}>
              No account?
            </NavLink>
          </form>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          text="Failed to authorization"
          type="alert"
          onCancel={switchModal}
        />
      )}
      {isLoaderShow && <Loader />}
    </div>
  );
};

export default Auth;
