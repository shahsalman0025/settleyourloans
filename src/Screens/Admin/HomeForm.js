import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import { auth, db } from "../../firebase";
import HomeFormData from "./HomeFormData";
import ViewModal from "./ViewModal";

function HomeForm() {
  const [sortedData, setSortedData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const collRefHome = collection(db, "home-form");
  const [user, setUser] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewModalId, setViewModalId] = useState();
  useEffect(() => {
    onSnapshot(collRefHome, (snapshot) => {
      let data = [];
      let dataSorted = [];
      snapshot.docs.forEach((doc) => {
        if (doc.data().date) {
          dataSorted.push({ ...doc.data(), id: doc.id });
        } else {
          data.push({ ...doc.data(), id: doc.id });
        }
      });
      console.log(dataSorted);
      console.log(data);
      dataSorted.sort(function (x, y) {
        return y.date - x.date;
      });
      setHomeData(dataSorted.concat(data));
    });
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(true);
        // ...
      } else {
        setUser(false);
      }
    });
  }, []);

  const viewBtnClick = async (e) => {
    setViewModalId(e.target.id);
    setViewModal(true);
  };

  const deleteBtnClick = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "home-form", e.target.id);
    await deleteDoc(docRef).then(() => {
      alert("Deleted Sucessfully");
    });
  };
  return (
    <>
      {user ? (
        <>
          {viewModal && (
            <ViewModal
              setViewModal={setViewModal}
              viewModalId={viewModalId && viewModalId}
            />
          )}

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
                            Facing Issue
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            View
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {homeData &&
                          homeData.map((person, personIdx) => (
                            <HomeFormData
                              person={person}
                              personIdx={personIdx}
                              deleteBtnClick={deleteBtnClick}
                              viewBtnClick={viewBtnClick}
                            />
                          ))}
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
