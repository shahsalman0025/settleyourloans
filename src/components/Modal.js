import React, { useState } from "react";
import Header from "./Header";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [debtAmount, setDebtAmount] = useState();
  const [areYouFacing, setAreYouFacing] = useState("option-1");
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(true);
  const collRef = collection(db, "home-form");
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    const docRef = await addDoc(collRef, {
      name,
      number,
      email,
      debtAmount,
      areYouFacing,
      date: Date.now(),
    });
    window.setTimeout(() => {
      setLoader(false);
      localStorage.setItem("formName", name);
      navigate(`/thanks/${docRef.id}`);
      console.log("Document written with ID: ", docRef.id);
    }, 3000);
  };
  return (
    <div className="some-modal">
      {" "}
      <form className="w-full max-w-xl bg-white p-5 rounded-xl">
        <h1 className="mb-12">Just a few more steps</h1>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Your Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Your Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Your Number
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              You can start settlement process with Rs.2,000 - Rs.3,000 and
              arrange additional funds towards first installment later. Is that
              manageable for you? *
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <button
          className="main-btn-sm tp-btn-hover alt-color my-12"
          type="submit"
        >
          <span>Send Request</span>
          <b />
        </button>
      </form>
    </div>
  );
}

export default Modal;
