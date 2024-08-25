import React, { useEffect, useState } from "react";
import shape1 from "./../assets/img/slider/m1.png";
import shape2 from "./../assets/img/slider/m2.png";
import shape3 from "./../assets/img/slider/m3.png";
import Logo from "./../assets/img/logo/logo-image.png";
import { Link, useNavigate } from "react-router-dom";
import PELoader from "../Screens/Utils/PELoader";
import validator from "validator";
import Modal from "./Modal";
import { db } from "../firebase";
import { addDoc, collection, getDocs, Timestamp, where, query } from "firebase/firestore";
import { upload } from "@testing-library/user-event/dist/upload";

function Hero() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [debtAmount, setDebtAmount] = useState();
  const [areYouFacing, setAreYouFacing] = useState(true);
  const [settlementProcess, setSettlementProcess] = useState();
  const [monthlyIncome, setMonthlyIncome] = useState();
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(true);
  const [ipAddress, setIPAddress] = useState('')
  const [disableButton, setDisableButton] = useState(false)
  const [emailError, setEmailError] = useState(false);
  const [address, setAddress] = useState('');
  const [numberError, setNumberError] = useState(false);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.log(error))
  }, []);


  // const validatePhoneNumber = (number) => {
  //   const isValidPhoneNumber = validator.isMobilePhone(number);
  //   return isValidPhoneNumber;
  // };

  // const validateEmail = (number) => {
  //   const isValidEmail = validator.isMobilePhone(number);
  //   return isValidEmail;
  // };
  const formSubmitHandler = async (e) => {
    setDisableButton(true)
    e.preventDefault();
    setEmailError(true);
    setNumberError(true);
    UploadData();
    let isValid = true;

    // Validate email
    if (!validator.isEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    // Validate number (assuming you want a numeric validation)
    if (!validator.isNumeric(number)) {
      setNumberError('Invalid phone number');
      isValid = false;
    }

    // Rest of your form submission logic
    // ...

    if (isValid) {
      alert("Form Submitted successfully")
    }
    console.log(isValid);
    const q = query(collection(db, "homefromrecord"), where("ip", "==", ipAddress));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {

      if (!validator.isNumeric(number)) {
        setNumberError('Invalid phone number');
        isValid = false;
        if (!validator.isEmail(email)) {
          setEmailError('Invalid email address');
          isValid = false;
          if (monthlyIncome == 'Choose a option') {
            alert('InValid Monthly Income');
          }
          else if (settlementProcess == 'Choose a option') {
            alert('Form Not filled Properly');

          }
          else {
            UploadData();

          }

        } else {
          alert('InValid Email');
        }

      }
      else {
        alert('InValid Phone number');
      }
      if (isValid) {
        // Submit the form or perform other actions
        // ...
      }
    }
    if (isValid) {
      isValid(true);
      console.log("okey")
    }
    // else {
    //   alert('Already Uploaded');
    //   window.setTimeout(() => {
    //     setLoader(false);
    //     localStorage.setItem("formName", name);
    //   }, 3000);
    // }

    // else {
    //   alert('Already Uploaded');
    //   window.setTimeout(() => {
    //     setLoader(false);
    //     localStorage.setItem("formName", name);
    //   }, 3000);
    // }
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());

    // });
    setDisableButton(false)
  };
  async function UploadData() {

    try {
     
      await addDoc(collection(db, 'homefromrecord'), {
        name: name,
        email: email,
        number: number,
        debtAmount: debtAmount,
        areYouFacing: areYouFacing,
        settlementProcess: settlementProcess,
        monthlyIncome: monthlyIncome,
        date: Date.now(),
        ip: ipAddress,
        address:address
      }).then((val) => {
        window.location.href = 'https://pmny.in/vrb1u30nOeZB'
        // navigate('/thanks/' + val.id);
        setLoader(true);
        console.log(val.id)
      })

    } catch (error) {
      alert(error)
    }
    window.setTimeout(() => {
      setLoader(false);
      localStorage.setItem("formName", name);
    }, 3000);
  }
  return (
    <div className="slider__area grey-bg slider__space slider__plr p-relative z-index fix">
      {loader && <PELoader />}

      <div
        className="slider__shape-top-1 d-none d-xl-block wow tpfadeLeft"
        data-wow-duration=".9s"
        data-wow-delay=".7s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-1.png"
          alt=""
        />
      </div>
      <div
        className="slider__shape-top-2 d-none d-xl-block wow tpfadeLeft"
        data-wow-duration=".9s"
        data-wow-delay="1.2s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-2.png"
          alt=""
        />
      </div>
      <div
        className="slider__shape-top-3 d-none d-xl-block wow tpfadeRight"
        data-wow-duration=".9s"
        data-wow-delay=".7s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-3.png"
          alt=""
        />
      </div>
      <div
        class="slider__shape-top-4 d-none d-xl-block wow tpfadeRight"
        data-wow-duration=".9s"
        data-wow-delay="1s"
      >
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-4.png"
          alt=""
        />
      </div>
      {/* <div class="slider__shape-top-5 d-none d-xxl-block">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-5.png"
          alt=""
        />
      </div> */}
      <div class="slider__shape-top-6 d-none d-lg-block">
        <img src="https://i.ibb.co/3F74B4c/6844401.png" alt="" />
      </div>
      <div class="slider__shape-top-7 d-none d-sm-block">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-7.png"
          alt=""
        />
      </div>
      {/* <div class="slider__shape-top-8">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-8.png"
          alt=""
        />
      </div> */}
      <div class="slider__shape-top-9 d-none d-xl-block">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-9.png"
          alt=""
        />
      </div>
      <div class="slider__shape-top-10">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-10.png"
          alt=""
        />
      </div>
      {/* <div class="slider__shape-top-11">
        <img
          src="https://ordainit.com/Sorex/sorex/assets/img/slider/shape-11.png"
          alt=""
        />
      </div> */}
      <div className="container-fluid">
        <div className="row .align-items-start justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="slider__section-box">
              <h4 className="section-subtitle char-anim">
                Settle Loans, Settle Life!
              </h4>
              {/* <h4 class="section-subtitle char-anim">
                Stop recovery calls in 24 hours.
              </h4> */}
              <h3 className="hero-title">
                Stop your Bank harassment and start Legal proceeding in 24
                hours.
              </h3>
            </div>
            <div
              className="slider__content wow"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <p className="char-anim-2">
                Settle Loans swiftly stops bank harassment and initiates legal
                proceedings within 24 hours.
                {/* Settle Loans provides fast and effective legal solutions for
                consumers who are experiencing harassment from banks, taking
                action within 24 hours to stop the harassment and pursue legal
                proceedings. */}
              </p>
            </div>
            <div
              className="slider__btn wow  mt-30"
              data-wow-duration=".9s"
              data-wow-delay="1.1s"
            >
              <Link className="main-btn tp-btn-hover alt-color" to="/contact">
                <span>Stop Your Harrasment Now</span>
                <b />
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow somevalue glass-form-effect-2"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <h3>Get Consultation</h3>
            <div className="contact__section-title pb-10">
              <div className="form-div-hero">
                <form onSubmit={formSubmitHandler} className="glass_form">
                  <div className="row">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Your Name"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Number
                        </label>
                        <input
                        value={number}
                          type="number"
                          id="number"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="91XXXXXX"
                          required
                          onChange={(e) => {
                            if (e.target.value.length <= 10) {
                           
                               setNumber(e.target.value);
setNumberError("")
                            }else{
                              setNumberError("Number can only contain 10 Digits")
                            }
                     
                          }}
                        />
                        {numberError && <p className="text-red-500">{numberError}</p>}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="youremail@company.com"
                        required
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      {emailError && <p className="text-red-500">{emailError}</p>}
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                       Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={address}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Your City"
                        required
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>





<div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <label
                          htmlFor="TotalDebtAmount"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Total Debt Amount
                        </label>
                        <select
                          id=" TotalDebtAmount"
                          required
                          onChange={(e) => {
                            setDebtAmount(e.target.value);
                          }}
                          className="mb-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                       
                       
                       
                        
                      
                        
                          <option selected="">Choose a option</option>
                          <option value="Below 1 lakh">
                          Below 1 lakh
                          </option>
                          <option value=" 1 - 2 Lakhs ">
                          1 - 2 Lakhs 
                          </option>
                          <option value="2 - 5 Lakhs">
                          2 - 5 Lakhs
                          </option>
                          <option value=" 5 - 8 Lakhs">
                          5 - 8 Lakhs
                          </option>
                          <option value="8 - 10 Lakhs">
                          8 - 10 Lakhs
                          </option>
                          <option value="  10 and above ">
                          10 and above 
                          </option>
                        </select>
                      </div>
                    </div>
{/*  */}
                    {/* <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="postbox__contact-input">
                        <input
                          type="number"
                          placeholder="Your Number"
                          required
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <input
                          type="text"
                          placeholder="Your email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <input
                          type="number"
                          placeholder="Total Debt Amount"
                          required
                          onChange={(e) => setDebtAmount(e.target.value)}
                        />
                      </div>
                    </div> */}
                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <label
                          htmlFor="countries"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Can you arrange Rs.2,000 - Rs.3,000 to start the
                          settlement process?
                        </label>
                        <select
                          id="countries"
                          required
                          onChange={(e) => {
                            setSettlementProcess(e.target.value);
                          }}
                          className="mb-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                          <option selected="">Choose a option</option>
                          <option value="Rs.2,000 in next 1-2days">
                            Yes I can arrange Rs.2,000 in next 1-2days
                          </option>
                          <option value="Rs.2,000 in next 2-3days">
                            Yes I can arrange Rs.2,000 in next 2-3days
                          </option>
                          <option value="No">
                            No i can not arrange the fund to start the
                            settlement process
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <label
                          htmlFor="countries"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Monthly income
                        </label>
                        <select
                          id="countries"
                          required
                          onChange={(e) => {
                            setMonthlyIncome(e.target.value);
                          }}
                          className="mb-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                          <option selected="">Choose a option</option>
                          <option value="Less than Rs. 15,000 per month">
                            Less than Rs. 15,000 per month
                          </option>
                          <option value="Rs.15,000-25,000 per month">
                            Rs.15,000-25,000 per month
                          </option>
                          <option value="Rs.25,000-50,000 per month">
                            Rs.25,000-50,000 per month
                          </option>
                          <option value="Rs.50,000-75,000 per month">
                            Rs.50,000-75,000 per month
                          </option>
                          <option value=" Rs.75,000-1,00,000 per month">
                            Rs.75,000-1,00,000 per month
                          </option>
                          <option value="More than 1,00,000 permonth">
                            More than 1,00,000 per month
                          </option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="col-sm-12">
                      <div className="postbox__contact-input">
                        <label htmlFor="" className="text-gray-800 text-sm">
                          You can start settlement process with Rs.2,000 -
                          Rs.3,000 and arrange additional funds towards first
                          installment later. Is that manageable for you? *
                        </label>
                        <select
                          className="w-100 h-[45px] p-[25px] mb-[30px]"
                          required
                        >
                          <option>Some default value</option>
                          <option
                            value="some"
                            className="text-lg text-gray-700 p-10"
                          >
                            Something
                          </option>
                          <option
                            value=""
                            className="text-lg text-gray-700 p-10"
                          >
                            Something
                          </option>
                        </select>
                      </div>
                    </div> */}
                    <div className="col-sm-12">
                      <label htmlFor="" className="are-you-facing">
                        Are you facing harassment by recovery agent / banks ?
                      </label>
                      <div>
                        <label htmlFor="f-option" className="l-radio">
                          <input
                            type="radio"
                            id="f-option"
                            name="selector"
                            tabIndex={1}
                            defaultChecked
                            onChange={(e) => {
                              setAreYouFacing(true);
                            }}
                          />
                          <span>Yes</span>
                        </label>
                        <label htmlFor="s-option" className="l-radio">
                          <input
                            type="radio"
                            id="s-option"
                            name="selector"
                            tabIndex={2}
                            onChange={(e) => {
                              setAreYouFacing(false);
                            }}
                          />
                          <span>No</span>
                        </label>
                      </div>

                      {/* <label htmlFor="" className="are-you-facing">
                        Are you facing harassment by recovery agent / banks ?
                      </label>
                      <div className="wrapper">
                        <input
                          type="radio"
                          name="select"
                          id="option-1"
                          value="yes"
                          onChange={(e) => {
                            setAreYouFacing(e.target.id);
                          }}
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="select"
                          value="no"
                          id="option-2"
                          onChange={(e) => {
                            setAreYouFacing(e.target.id);
                          }}
                        />
                        <label htmlFor="option-1" className="option option-1">
                          <div className="dot" />
                          <span>Yes</span>
                        </label>
                        <label htmlFor="option-2" className="option option-2">
                          <div className="dot" />
                          <span>No</span>
                        </label>
                      </div> */}
                    </div>

                    <div
                      className="contact__button wow pt-20"
                      data-wow-duration=".9s"
                      data-wow-delay="1.1s"
                    >
                      <button
                        style={disableButton ? { display: 'none' } : {}}
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="contact__button wow tpfadeUp"
              data-wow-duration=".9s"
              data-wow-delay="1.1s"
            >
              {/* <button className="main-btn-sm tp-btn-hover alt-color">
                <span>Send Request</span>
                <b />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
