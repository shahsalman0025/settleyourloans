export const json = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Mobile",
        "description": "Please share a number where we can reach you on call and whatsapp",
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
        "name": "question6",
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
        "name": "question3",
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
        "name": "question4",
        "title": "Married ?",
        "isRequired": true
       },
       {
        "type": "dropdown",
        "name": "question5",
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
        "name": "question7",
        "title": "Monthly income",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "dropdown",
        "name": "question8",
        "title": "Total credit card dues",
        "description": "Provide total outstanding dues for all credit cards for which you want settlement",
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
        "name": "question9",
        "title": "Total personal loan amount",
        "description": "Provide total outstanding dues for all personal loans for which you want settlement",
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
        "name": "question10",
        "title": "Are you staying in rented accommodation or own house ?",
        "isRequired": true,
        "choices": [
         "Own house",
         "Rented accomodation"
        ]
       },
       {
        "type": "dropdown",
        "name": "question11",
        "title": "Are you facing any harassment?",
        "isRequired": true,
        "choices": [
         "Not facing any harassments",
         "Facing some harassment",
         "Facing severe harassment"
        ]
       },
       {
        "type": "dropdown",
        "name": "question12",
        "title": "In the past, have you done any settlement with any bank for credit card or personal loan?",
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
        "name": "question13",
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
        "name": "question14",
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
        "name": "question15",
        "title": "Your Queries"
       }
      ]
     }
    ],
    "showTitle": false
   }