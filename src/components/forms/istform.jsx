import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";

import { json } from "./json";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

function SurveyComponent() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
    
       SendData(sender.data)
    });
    
   async function SendData(Data) {
    let x=Data;
    x['created']= Date.now()
        try {
            await addDoc(collection(db, 'ContactPageForm'), Data)
      
          } catch (error) {
        
          }
    }
    return (<Survey model={survey} />);
}

export default SurveyComponent;