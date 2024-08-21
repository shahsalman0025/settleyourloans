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

    survey.onComplete.add((sender) => {
        SendData(sender.data);
    });

    async function SendData(data) {
        data['created'] = Date.now();
        try {
            await addDoc(collection(db, 'ContactPageForm'), data);
            window.location.href = 'https://pmny.in/vrb1u30nOeZB'; 
        } catch (error) {
            console.error("Error adding document: ", error);
           
        }
    }

    return <Survey model={survey} />;
}

export default SurveyComponent;
