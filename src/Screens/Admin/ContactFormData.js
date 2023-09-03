import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import PELoader from "../../Screens/Utils/PELoader";


function ContactFormData({ person, personIdx }) {
  const [loader, setLoader] = useState(false);
  const d = new Date(person.created);
  return (
    <>
    {setLoader ? (<>
    
      <tr
      key={person.email}
      className={personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {person.created ? d.toDateString() : "No Date"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {person.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {person.number}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {person.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {person.message}
      </td>
    </tr>
    
    </>):(<PELoader></PELoader>)}

    
    </>
  );
}

export default ContactFormData;
