"use client";

import { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function FinancialInfo() {
  const page = 2;
  const [selected] = useState(page === 2);
  const [status, setStatus] = useState("");

  const buttonClassName = `rounded-full h-10 w-10 ${
    selected ? "bg-blue-600" : "bg-white"
  }`;

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const details = useSelector((state: any) => state.details);

  const handleSubmit = async () => {
    let { data } = await axios.post("/api", { details, status });
    if (data.success) {
      window.location.href = data.link;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center align-middle p-24">
      <div className="max-w-sm">
        <div className="flex justify-center gap-4">
          <Link href={"/personalInfo"}>
            <button className="rounded-full bg-gray-100 h-10 w-10">1</button>
          </Link>
          <button className={buttonClassName}>2</button>
        </div>
        <div className="text-center p-2">
          <h1 className="text-2xl font-semibold">Financial Information</h1>
          <h2 className="text-gray-500 font-medium ">
            All your information is stored securely
          </h2>
        </div>
        <div className="flex flex-col ">
          <div className=" py-3 flex flex-col gap-3">
            <div>
              <div className="rounded-lg p-3 border w-full transition-all duration-300 focus:border-blue-600 focus:outline-none">
                <select
                  className="bg-white text-gray-400 w-full"
                  name="title"
                  onChange={handleStatusChange}
                  value={status}
                  id="title"
                >
                  <option value="" disabled hidden>
                    Your current employment status
                  </option>
                  <option value="unemployed">Unemployed</option>
                  <option value="working">Working</option>
                  <option value="looking for job">Lokking for job</option>
                </select>
              </div>
            </div>
            <div>
              <input
                className="rounded-lg p-3 w-full border transition-all duration-300 focus:border-blue-600 focus:outline-none"
                type="text"
                name=""
                placeholder="Additional savings/investments"
              />
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
