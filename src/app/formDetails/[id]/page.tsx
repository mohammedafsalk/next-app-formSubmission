"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

export default function Details({ params }: any) {
  const id = params.id;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const { link }: any = data[0];
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log("Text copied to clipboard:", link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Unable to copy text to clipboard", err);
        alert("Unable to copy text to clipboard. Please try again.");
      });
  };

  useEffect(() => {
    (async function () {
      let { data } = await axios.get(`/api/details/${id}`);
      if (data.success) {
        setData(data.link);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center align-middle p-24">
      <div className="max-w-sm">
        <div className="text-center p-2">
          <h1 className="text-2xl font-semibold">Form Information</h1>
          <h2 className="text-gray-500 font-medium ">
            All your information is stored securely
          </h2>
        </div>

        {loading && (
          <div className="flex justify-center mt-5">
            <BeatLoader color="#0047ff" />
          </div>
        )}

        {data.length > 0 && (
          <div className="flex flex-col ">
            <div className=" py-3 flex flex-col gap-3 bg-gray-100 rounded-xl p-2 mb-3 ">
              <div className="p-2">
                <h3 className="font-extrabold">Name</h3>
                <span>{(data[0] as any)?.userId?.name}</span>
              </div>
              <div className="p-2">
                <h3 className="font-extrabold">Email</h3>
                <span>{(data[0] as any)?.userId?.email}</span>
              </div>
              <div className="p-2">
                <h3 className="font-extrabold">Date of birth</h3>
                <span>{(data[0] as any)?.userId?.dob}</span>
              </div>
              <div className="p-2">
                <h3 className="font-extrabold">Address</h3>
                <span>{(data[0] as any)?.userId?.address}</span>
              </div>
              <div className="p-2">
                <h3 className="font-extrabold">Description</h3>
                <span>{(data[0] as any)?.userId?.addressDetails}</span>
              </div>
              <div className="p-2">
                <h3 className="font-extrabold">Emp.Status</h3>
                <span>{(data[0] as any)?.userId?.empStatus}</span>
              </div>
              <div className="flex justify-center">
                <button
                  className=" w-20 h-8 bg-blue-600 rounded-lg text-center text-white"
                  onClick={handleCopy}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"/"}>
                <button className="w-full p-2 bg-blue-600 rounded-lg text-white ">
                  Close
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
