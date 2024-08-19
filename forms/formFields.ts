export const forms = {
    user: [
        { 
            type: "text",
            name: "firstname",
            label: "First Name",
            placeholder: "Enter your firstname",
            property: "firstname",
            value: "",
            required: true,
        },
        { 
            type: "text",
            name: "lastname",
            label: "Last Name",
            placeholder: "Enter your lastname",
            property: "lastname",
            value: "",
            required: true,
        },
        { 
            type: "text",
            name: "username",
            label: "Username",
            placeholder: "Enter a username",
            property: "username",
            value: "",
            required: true,
        },
        { 
         type: "email",
         name: "email",
         label: "Email",
         placeholder: "example@gmail.com",
         property: "email",
         value: "",
         required: true,
        },
        { 
         type: "password",
         name: "password",
         label: "Password",
         placeholder: "Enter a password",
         property: "password",
         value: "",
         required: true,
        },
        { 
         type: "date",
         name: "dob",
         label: "Date of birth",
         placeholder: "Enter your date of birth",
         required: true,
        //  maxDate: new Date('01-01-2004'), append in getUserFormFields - WEB
         // maxDate: new Date('01-01-2004'),
         property: "dob",
        //  value: new Date('01-01-1994')
        //  value: new Date('01-01-1994') append in getUserFormFields  - WEB
        },
        { 
         type: "radio",
         name: "gender",
         label: "Gender",
         placeholder: "Enter your Gender",
         property: "gender",
         required: true,
         value: 1,
        //  options: [{ value: 0, index: 0, matineValue: 'male', label: 'Male' }, { value: 1, index: 1, matineValue: 'female', label: 'Female'  }],
        },
        { 
        //  type: "language_picker",
         name: "teachingLanguage",
         label: "Enter your native language",
         placeholder: "Enter your teachingLanguage",
         property: "teachingLanguage",
         required: true,
         value: null
        },
        { 
        //  type: "language_picker",
         name: "learningLanguage",
         label: "Enter your learning language",
         placeholder: "Enter your learningLanguage",
         property: "learningLanguage",
         required: true,
         value: null
        },
     ],
     exchange: [
        { 
            type: "text",
            name: "name",
            required: true,
            label: "Exchange Name",
            placeholder: "Enter a name",
            property: "name",
            value: "",
            withAsterisk: true
        },
        { 
            type: "location_picker",
            name: "location",
            label: "Location",
            placeholder: "Type a location",
            property: "location",
            value: null
        },
        { 
            type: "select",
            name: "capacity",
            label: "Number Of Participants",
            placeholder: "How many people in this exchange",
            property: "capacity",
            value: "",
            availableValues: ['2', '4', '6', '8', '10', '12']
           },
        { 
            type: "datetime",
            name: "time",
            label: "Time and Date",
            placeholder: "Pick a time and date",
            property: "time",
            value: "",
            format: "DD MMM YYYY hh:mm A"
        },
        { 
            type: "select",
            name: "duration",
            label: "Duration",
            placeholder: "How long will the exchange be (minutes)",
            property: "duration",
            value: "",
            availableValues: ['30', '45', '60', '120', '180']
        },
        { 
            type: "radio",
            name: "gender",
            label: "Gender",
            placeholder: "Enter your Gender",
            property: "gender",
            value: 2,
        },
        { 
            type: "rangeslider",
            name: "age_range",
            label: "Age range of Participants",
            property: "age_range",
            value: [18, 100],
            min: 18,
            options: [
                { value: 18, label: '18' },
                { value: 100, label: '100' },
            ]
        },
        { 
            type: "language_shower",
            name: "teachingLanguage",
            label: "Your teaching language is",
            property: "teachingLanguage",
            value: null
        },
        { 
            type: "language_shower",
            name: "learningLanguage",
            label: "Your learning language is",
            property: "learningLanguage",
            value: null
        },  
     ]
}