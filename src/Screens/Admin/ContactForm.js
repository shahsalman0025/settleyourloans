import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ContactFormData from "./ContactFormData";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import PELoader from "../../Screens/Utils/PELoader";
import ExportCSV from "./ExportCSV";

function ContactForm() {
  const [homeData, setHomeData] = useState([]);
  const [user, setuser] = useState(true);
  const [loader, setLoader] = useState(true);

  const auth = getAuth();
  useEffect(() => {
    getUserAuth();

  }, []);
  const getUserAuth = async () => {

    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setuser(true)
        FetchContactFormData();

      } else {
        setuser(false)
        // setLoader(false);
      }
    });
  }
  const FetchContactFormData = async () => {
    setLoader(true);
    await getDocs(collection(db, "ContactPageForm"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));

        newData.sort((a, b) => new Date(b.created) - new Date(a.created));
        setHomeData(newData)
        setLoader(false)

      })

  }
  return (
    <>
      {user ? (
        <>

          <HeaderAdmin />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-52">
          <ExportCSV list={homeData} filename={"Contact Form"}/>

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Message
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                          City
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Language
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Monthly income
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Accomodation Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Employment Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Past Settlement
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Payment
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Married
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Credit Card Dues
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Personal Loan Dues
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                        Harassment
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {loader ? (<PELoader />) : (<>
                          {homeData &&
                            homeData.map((person, personIdx) => (
                              <ContactFormData
                                person={person}
                                personIdx={personIdx}
                              />
                            ))}
                        </>)}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <section className="antialiased bg-gray-100 text-gray-600 px-4 h-screen">
            <div className="flex flex-col justify-center h-full">
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100 flex ">
                  <h2 className="font-semibold text-gray-800">
                    Contact Form's
                  </h2>
                </header>

                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Name</div>
                          </th>

                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Email</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Message
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {homeData &&
                          homeData.map((data) => (
                            <tr>
                              <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="font-medium text-gray-800">
                                    {data.name}
                                  </div>
                                </div>
                              </td>{" "}
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{data.email}</div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{data.message}</div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </>
  );
}

export default ContactForm;
