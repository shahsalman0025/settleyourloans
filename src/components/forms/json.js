export const json = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "Name",
        "title": "Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "Mobile Number",
        "title": "Mobile ",
        "description": "Please share a number where we can reach you on call and WhatsApp",
        "isRequired": true,
        "requiredErrorText": "Invalid number",
        "validators": [
         {
          "type": "regex",
          "text": "Invalid number"
         }
        ],
        "inputType": "tel",
        "maxLength": ""
       },
       {
        "type": "text",
        "name": "Email",
        "title": "Email",
        "isRequired": true,
        "requiredErrorText": "Invalid number",
        "validators": [
         {
          "type": "regex",
          "text": "Invalid number"
         }
        ],
        "inputType": "email",
        "maxLength": ""
       },
       {
        "type": "dropdown",
        "name": "City",
        "title": "City",
        "isRequired": true,
        "choices": [
         "Dehli",
         "Mumbai",
         "Pune",
         "Bangalore",
         "Chennai",
         "Hyderabad",
         "Other"
        ]
       },
       {
        "type": "boolean",
        "name": "Married",
        "title": "Married ?",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "Employment status",
        "title": "Employment status",
        "isRequired": true,
        "choices": [
         "Not employed",
         "Working as salaried employee",
         "Self employed",
         "Business with more than 10 employees"
        ]
       },
       {
        "type": "text",
        "name": "Monthly income",
        "title": "Monthly income",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "Total credit card dues",
        "title": "Total credit card dues",
        "description": "कुल क्रेडिट कार्ड बकाया *",
        "isRequired": true,
        "choices": [
         "Rs. 5-6 lacs",
         "No Dues",
         "Less that Rs. 1 lac",
         "Rs. 1-2 lacs",
         "Rs. 3-4 lacs",
         "Rs. 4-5 lacs",
         "Rs. 5-10 lacs",
         "More than Rs.10 lacs"
        ]
       },
       {
        "type": "dropdown",
        "name": "Total personal loan amount",
        "title": "Total personal loan amount",
        "description": "कुल व्यक्तिगत ऋण राशि*",
        "isRequired": true,
        "choices": [
         "Rs. 5-6 lacs",
         "No Dues",
         "Less that Rs. 1 lac",
         "Rs. 1-2 lacs",
         "Rs. 3-4 lacs",
         "Rs. 4-5 lacs",
         "Rs. 5-10 lacs",
         "More than Rs.10 lacs"
        ]
       },
       {
        "type": "dropdown",
        "name": "Accomodation Status",
        "title": "Are you staying in rented accommodation or own house ?",
        "description": "क्या आप किराये के मकान में रह रहे हैं या अपने घर में? *",
        "isRequired": true,
        "choices": [
         "Own house",
         "Rented accomodation"
        ]
       },
       {
        "type": "dropdown",
        "name": "question11",
        "title": "harassment",
        "description": "क्या आप किसी उत्पीड़न का सामना कर रहे हैं? *",
        "isRequired": true,
        "choices": [
         "Not facing any harassments",
         "Facing some harassment",
         "Facing severe harassment"
        ]
       },
       {
        "type": "dropdown",
        "name": "Past Settlement",
        "title": "In the past, have you done any settlement with any bank for credit card or personal loan?",
        "description": "क्या आपने अतीत में क्रेडिट कार्ड या पर्सनल लोन के लिए किसी बैंक के साथ क",
        "isRequired": true,
        "choices": [
         "No",
         "I have done settlement for credit card",
         "i have done settlement for personal loan",
         "I have done settlement for both"
        ]
       },
       {
        "type": "dropdown",
        "name": "Payment to start settlement",
        "title": "You can start settlement process with Rs.3,000 - Rs.5,000 and arrange additional funds towords first installment later. Is that manageable for you",
        "isRequired": true,
        "choices": [
         "Yes I can arrange in next 1-2 days",
         "Yes I can arrange in next 2-3 days",
         "No I cannot arrange it to start my settlement process"
        ]
       },
       {
        "type": "dropdown",
        "name": "Language",
        "title": "Are you comfortable with English or would you prefer another language for phone call or WhatsApp messaging",
        "choices": [
         "Comfortable with English",
         "Hindi",
         "Kannada",
         "Tamil",
         "Telgu",
         "Malayalm",
         "Other"
        ]
       },
       {
        "type": "comment",
        "name": "Queries",
        "title": "Your Queries"
       }
      ]
     }
    ],
    "showTitle": false
   }