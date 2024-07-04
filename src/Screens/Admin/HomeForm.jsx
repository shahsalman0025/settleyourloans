import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import HomeFormData from "./HomeFormData";
import ViewModal from "./ViewModal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import PELoader from "../Utils/PELoader";
import ExportCSV from './ExportCSV';

function HomeForm() {
  const [homeData, setHomeData] = useState([]);
  const [fliteredHomeData, setFilteredHomeData] = useState([]);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const [viewModal, setViewModal] = useState(false);
  const [viewModalId, setViewModalId] = useState();

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const auth = getAuth();
  useEffect(() => {
    getUserAuth();
    // FetchHomeFormData();
  }, []);
  
  const getUserAuth = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        setUser(false);
      } else {
        setUser(true);
      }
    });
  };

  const FetchHomeFormData = async () => {
    setLoader(true);

    await getDocs(collection(db, "homefromrecord"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        newData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setHomeData(newData);
        setFilteredHomeData(newData)
        setLoader(false);
      });
  };

  const handleDateFilter = () => {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const filteredData = homeData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= from && itemDate <= to;
    });
    console.log(filteredData);
    setFilteredHomeData(filteredData);
  };

  const deleteBtnClick = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "homefromrecord", e.target.id);
    await deleteDoc(docRef).then(() => {
      alert("Deleted Successfully");
      FetchHomeFormData();
    });
  };

  return (
    <>
      {user ? (
        <>
          <HeaderAdmin />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-52">
            <ExportCSV list={fliteredHomeData} filename={"Home Form"} />
            
            <div className="flex  mb-4">
              <label className="mr-2">From:</label>
              <input 
                type="date" 
                value={fromDate} 
                onChange={(e) => setFromDate(e.target.value)} 
                className="mr-4"
              />
              <label className="mr-2">To:</label>
              <input 
                type="date" 
                value={toDate} 
                onChange={(e) => setToDate(e.target.value)} 
                className="mr-4"
              />
              <button 
                onClick={handleDateFilter} 
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Filter
              </button>
            </div>

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
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Address
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
                        {loader ? (
                          <PELoader />
                        ) : (
                          <>
                            {fliteredHomeData &&
                              fliteredHomeData.map((person, personIdx) => (
                                <HomeFormData
                                  key={personIdx}
                                  person={person}
                                  personIdx={personIdx}
                                  deleteBtnClick={deleteBtnClick}
                                />
                              ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Not Authorized</h1>
      )}
    </>
  );
}

export default HomeForm;
