import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./register.module.css";
import Tooltip from "../../components/ui/Tooltip/Tooltip";
import Input from "../../components/ui/Input/Input";
import Btn from "../../components/ui/Btn/Btn";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/ui/Modal/Modal";
import Loader from "../../components/ui/Loader/Loader";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface ModalState {
  userExistsModal: boolean;
  failedRegisterModal: boolean;
}

const Register = () => {
  const navigate = useNavigate();

  const [registerUserData, setRegisterUserData] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    userExistsModal: false,
    failedRegisterModal: false,
  });

  const [isPasswordsMatch, setIsPasswordsMatch] = useState<boolean>(true);

  const [isFieldsEmpty, setIsFieldsEmpty] = useState<boolean>(false);

  const [isLoaderShow, setIsLoaderShow] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (
        registerUserData.username.trim() !== "" &&
        registerUserData.email.trim() !== "" &&
        registerUserData.password.trim() !== "" &&
        registerUserData.confirmPassword?.trim() !== ""
      ) {
        setIsFieldsEmpty(false);
        setIsPasswordsMatch(true);

        if (registerUserData.password === registerUserData.confirmPassword) {
          setIsLoaderShow(true);
          setIsPasswordsMatch(true);

          const userData = { ...registerUserData };

          delete userData.confirmPassword;

          const response = await axios.post(
            "http://localhost:3000/register",
            userData
          );

          if (response.status === 200) {
            const { jwt, userData } = response.data.user;

            Cookies.set("token", jwt, { expires: 30 });
            Cookies.set("username", userData.username, { expires: 30 });
            Cookies.set("email", userData.email, { expires: 30 });

            navigate("/");
          } else {
            setIsModalOpen((prevState) => ({
              ...prevState,
              failedRegisterModal: true,
            }));
            throw new Error("Failed to register user");
          }
        } else {
          setIsPasswordsMatch(false);
        }
      } else {
        setIsFieldsEmpty(true);
        setIsPasswordsMatch(true);
      }
    } catch (error) {
      setIsModalOpen((prevState) => ({
        ...prevState,
        userExistsModal: true,
      }));
      console.error("Error registering user:", error);
    } finally {
      setIsLoaderShow(false);
    }
  };

  return (
    <div className="container">
      <div className={styles.reg}>
        <div className={styles.regCard}>
          <h1 className={styles.regTitle}>Registration</h1>

          <form className={styles.regForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <span className={styles.validationText}>
                {isFieldsEmpty && "Enter your username"}
              </span>
              <div className={styles.inputWrap}>
                <Input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={registerUserData.username}
                  onChange={handleChange}
                />
                <Tooltip text="Enter your username" textLeft={true} />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <span className={styles.validationText}>
                {isFieldsEmpty && "Enter your email"}
              </span>
              <div className={styles.inputWrap}>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={registerUserData.email}
                  onChange={handleChange}
                />
                <Tooltip text="Enter your email" textLeft={true} />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <span className={styles.validationText}>
                {isFieldsEmpty && "Enter your password"}
                {!isPasswordsMatch ? "Passwords not match" : ""}
              </span>
              <div className={styles.inputWrap}>
                <Input
                  placeholder="Password"
                  type={isShowPassword ? "text" : "password"}
                  secondClass={styles.passInput}
                  name="password"
                  value={registerUserData.password}
                  onChange={handleChange}
                />
                <label className={styles.eyeLabel}>
                  <input type="checkbox" className={styles.checkPassShow} />
                  <div className={styles.eye} onClick={showPassword}></div>
                </label>
                <Tooltip text="Enter your password" textLeft={true} />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <span className={styles.validationText}>
                {isFieldsEmpty && "Enter your password again"}
                {!isPasswordsMatch ? "Passwords not match" : ""}
              </span>
              <div className={styles.inputWrap}>
                <Input
                  placeholder="Confirm Password"
                  type={isShowPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={registerUserData.confirmPassword}
                  onChange={handleChange}
                />
                <Tooltip text="Enter your password again" textLeft={true} />
              </div>
            </div>

            <Btn btnText="Submit" />

            <NavLink to={"/auth"} className={styles.authLink}>
              Have an account?
            </NavLink>
          </form>
        </div>
      </div>
      {isModalOpen.userExistsModal && (
        <Modal
          text="User already exists"
          type="alert"
          onCancel={() => {
            setIsModalOpen((prevState) => ({
              ...prevState,
              userExistsModal: false,
            }));
          }}
        />
      )}
      {isModalOpen.failedRegisterModal && (
        <Modal
          text="Failed to register"
          type="alert"
          onCancel={() => {
            setIsModalOpen((prevState) => ({
              ...prevState,
              failedRegisterModal: false,
            }));
          }}
        />
      )}
      {isLoaderShow && <Loader />}
    </div>
  );
};

export default Register;
