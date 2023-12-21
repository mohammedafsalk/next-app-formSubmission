import { useState, useEffect } from "react";

const useValidations = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [mobileNumber, setMobileNumber] = useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));

    const cleanedMobileNumber = mobileNumber.replace(/\D/g, ""); 
    setIsMobileNumberValid(/^\d{10}$/.test(cleanedMobileNumber));

    setIsEmailValid(email === "" || emailRegex.test(email));
    setIsMobileNumberValid(
      mobileNumber === "" || /^\d{10}$/.test(cleanedMobileNumber)
    );
    setIsPasswordValid(
      password === "" || /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)
    );

    setIsConfirmPasswordValid(
      confirmPassword === "" ||
        (password !== "" && confirmPassword === password)
    );
  }, [email, mobileNumber, password, confirmPassword]);

  const hasErrors = () => {
    return (
      email.trim() === "" ||
      mobileNumber.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      !isEmailValid ||
      !isMobileNumberValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    );
  };

  return {
    email,
    setEmail,
    isEmailValid,
    mobileNumber,
    setMobileNumber,
    isMobileNumberValid,
    password,
    setPassword,
    isPasswordValid,
    confirmPassword,
    setConfirmPassword,
    isConfirmPasswordValid,
    hasErrors,
  };
};

export default useValidations;
