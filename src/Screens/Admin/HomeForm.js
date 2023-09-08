import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import HomeFormData from "./HomeFormData";
import ViewModal from "./ViewModal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import PELoader from "../../Screens/Utils/PELoader";


function HomeForm() {
  const [homeData, setHomeData] = useState([]);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const [viewModal, setViewModal] = useState(false);
  const [viewModalId, setViewModalId] = useState();

  const auth = getAuth();
  useEffect(() => {
    getUserAuth();
    FetchHomeFormData();
  }, []);
  const getUserAuth = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        setUser(false)
      }
      else {
        setUser(true)
      }
    });
  }
  const FetchHomeFormData = async () => {
    setLoader(true)

    await getDocs(collection(db, "homefromrecord"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        newData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setHomeData(newData)
        setLoader(false)
      })
  }
  const deleteBtnClick = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "homefromrecord", e.target.id);
    await deleteDoc(docRef).then(() => {
      alert("Deleted Sucessfully");
      FetchHomeFormData();
    });
  };
  // const viewBtnClick = async (e) => {
  //   setViewModalId(e.target.id);
  //   setViewModal(true);
  // };
  return (
    <>
      {user ? (
        <>
          {/* {viewModal && (
            <ViewModal
              setViewModal={setViewModal}
              viewModalId={viewModalId && viewModalId}
            />
          )} */}

          <HeaderAdmin />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-52">
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
                            Total Debt Amount
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Monthly Income
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Settlement Process
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Facing Issue
                          </th>
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            View
                          </th> */}
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {loader ? (<PELoader />) : (<>
                          {homeData &&
                            homeData.map((person, personIdx) => (
                              <HomeFormData
                                person={person}
                                personIdx={personIdx}
                                deleteBtnClick={deleteBtnClick}
                              // viewBtnClick={viewBtnClick}
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

          {/* <section className="antialiased bg-gray-100 text-gray-600 px-4 h-fit">
            <div className="flex flex-col justify-center h-full">
              
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100 flex ">
                  <h2 className="font-semibold text-gray-800">Home Form's</h2>
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
                            <div className="font-semibold text-left">
                              Number
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Email</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Debt Amount
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Harassment
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
                                <div className="text-left">{data.number}</div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{data.email}</div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-medium text-green-500">
                                  {data.debtAmount}
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-lg text-center">??</div>
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

export default HomeForm;
