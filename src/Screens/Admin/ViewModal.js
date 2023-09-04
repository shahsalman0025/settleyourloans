import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";

function ViewModal({ setViewModal, viewModalId }) {
  const [data, setData] = useState([]);
  const getData = async () => {
    // const docRef = doc(db, "home-form", viewModalId);
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   setData(Object.entries(docSnap.data()));
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  };
  const FetchHomeFormData = async ()=>{
    await getDocs(collection(db, "homeformrecord"))
    .then((querySnapshot)=>{               
      const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
      setData(newData);                
  })}

  // useEffect(() => {
  //   if (viewModalId) {
  //     getData();
  //   }
  // }, []);

  return (
    <div className="some-modal">
      {data ? (
        <div className="flex flex-col">
          <h1 class="mb-4 text-3xl font-extrabold text-white">
            {viewModalId && viewModalId}
          </h1>
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
                        Settlement Process
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Monthly Income
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((person, personIdx) => (
                
                        <tr key={personIdx} className="bg-white">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {person[0]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {person[1]}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="w-50 mt-20">
            <button
              class="p-3 bg-white border rounded-full w-full font-semibold"
              onClick={() => {
                setViewModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 class="mb-4 text-3xl font-extrabold text-white">No Data Found</h1>

          <div class="w-50 mt-20">
            <button
              class="p-3 bg-white border rounded-full w-full font-semibold"
              onClick={() => {
                setViewModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewModal;
