"use client";

import {
  setEmail as emailSet,
  setMobile as mobileSet,
  setPassword as passwordSet,
} from "@/lib/features/detailSlice";
import { useRouter } from "next/navigation";
import useValidations from "./hooks/useValidations";
import { IoIosInformationCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const details = useSelector((state: any) => state.details);
  console.log(details);

  const {
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
  } = useValidations();

  const handleSubmit = async () => {
    dispatch(emailSet(email));
    dispatch(mobileSet(mobileNumber));
    dispatch(passwordSet(password));
    router.push("/personalInfo");
  };

  return (
    <main className="flex min-h-screen flex-col items-center align-middle p-24">
      <div className="max-w-sm">
        <div className="text-center p-2 mb-5 ">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <h2 className="text-gray-500 font-medium ">
            Set-up your RentlyPass in as little as 2 minutes
          </h2>
        </div>
        <div className="flex flex-col ">
          <div className=" py-3 flex flex-col gap-3">
            <h2 className="text-gray-500 font-medium">Contact Details</h2>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id=""
                placeholder="Email address"
              />
              {!isEmailValid && (
                <p className="text-red-700">Email is not valid</p>
              )}
            </div>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                name="mobile"
                id=""
                placeholder="Mobile Number"
              />
              {!isMobileNumberValid && (
                <p className="text-red-700">Mobile number is not valid</p>
              )}
            </div>
          </div>
          <div className=" py-3 flex flex-col gap-3">
            <h2 className="text-gray-500 font-medium">Set a password</h2>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id=""
                placeholder="Password"
              />
              {!isPasswordValid && (
                <p className="text-red-700">
                  Must 6 characters,1 uppercase letter and one number is must!
                </p>
              )}
            </div>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id=""
                placeholder="Confirm your password"
              />
              {!isConfirmPasswordValid && (
                <p className="text-red-700">Password not matching</p>
              )}
            </div>
            <div className="flex gap-3">
              <div className="text-gray-600">
                <IoIosInformationCircle />
              </div>
              <h3 className="text-gray-500 text-sm">
                We need a password to keep your information safe.But dont
                worry,we'll also send your custom URL via email
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={handleSubmit}
              disabled={hasErrors()}
              className={`w-full p-2 ${
                !hasErrors() ? "bg-blue-600" : "bg-blue-100 cursor-not-allowed "
              } rounded-lg text-white`}
            >
              Create your account
            </button>
            <h3 className="text-gray-500 text-sm">
              By clicking you are agreeing to the terms and conditions and our
              privacy policies
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
