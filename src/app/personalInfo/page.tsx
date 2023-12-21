"use client";

import { useState } from "react";
import Link from "next/link";
import {
  setAddress,
  setDob,
  setDesc,
  setName,
} from "@/lib/features/detailSlice";
import { IoIosInformationCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const router = useRouter();

  const page = 1;
  const [selected, setSelected] = useState(page === 1);

  const [data, setData] = useState({
    name: "",
    dob: "",
    address: "",
    desc: "",
  });

  const handleData = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(setAddress(data.address));
    dispatch(setName(data.name));
    dispatch(setDesc(data.desc));
    dispatch(setDob(data.dob));
    router.push("/financialInfo");
  };

  const buttonClassName = `rounded-full h-10 w-10 ${
    selected ? "bg-blue-600" : "bg-white"
  }`;

  return (
    <main className="flex min-h-screen flex-col items-center align-middle p-24">
      <div className="max-w-sm">
        <div className="flex justify-center gap-4">
          <button className={buttonClassName}>1</button>
          <Link href={"/financialInfo"}>
            <button className="rounded-full bg-gray-100 h-10 w-10">2</button>
          </Link>
        </div>
        <div className="text-center p-2 mb-5 ">
          <h1 className="text-2xl font-semibold">Personal Information</h1>
          <h2 className="text-gray-500 font-medium ">
            Please answer questions as accurately as possible
          </h2>
        </div>
        <div className="flex flex-col ">
          <div className=" py-3 flex flex-col gap-3">
            <div>
              <div className="flex gap-3">
                <div className="rounded-lg p-3 border w-full transition-all duration-300 focus:border-blue-600 focus:outline-none">
                  <select
                    className="bg-white text-gray-400"
                    name="title"
                    id="title"
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </div>
                <div className="rounded-lg p-3 border  transition-all duration-300 focus:border-blue-600 focus:outline-none">
                  <input
                    type="text"
                    name="name"
                    onChange={handleData}
                    value={data.name}
                    id=""
                    placeholder="Full Name as per passport"
                  />
                </div>
              </div>
            </div>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="date"
                name="dob"
                onChange={handleData}
                value={data.dob}
                placeholder="Date of birth"
              />
            </div>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="text"
                name="address"
                onChange={handleData}
                value={data.address}
                placeholder="Current address"
              />
            </div>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="text"
                name=""
                placeholder="How long you lived at this address "
              />
            </div>
            <div>
              <textarea
                className="rounded-lg p-3 w-full h-32 border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                name="desc"
                onChange={handleData}
                value={data.desc}
                id=""
                placeholder="Please tell something about you"
              />
            </div>
            <div className="flex gap-3">
              <div className="text-gray-600">
                <IoIosInformationCircle />
              </div>
              <h3 className="text-gray-500 text-sm">
                All information can be edited once you have created your account
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="w-full p-2 bg-blue-600 rounded-lg text-white "
              onClick={handleSubmit}
            >
              Save and continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
