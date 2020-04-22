
export const controlsTypes = {
  FULLNAME: "full name",
  ADDRESS: "address",
  STATUS: "status",
  COMMUNICATION: "communication",
};



export const getEditOrderControls = () => {
const controls = {
  FirstName: {
    type: controlsTypes.FULLNAME,
    label: "First Name",
    elementType: "input",
    elementConfig: {
      type: "text",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  LastName: {
    type: controlsTypes.FULLNAME,
    label: "Last Name",
    elementType: "input",
    elementConfig: {
      type: "text",
    },
    value: "",
    validation: {
      required: false,
    },
    valid: false,
    touched: false,
  },

  City: {
    type: controlsTypes.ADDRESS,
    label: "City",
    elementType: "input",
    elementConfig: {
      type: "text",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  Street: {
    type: controlsTypes.ADDRESS,
    label: "Street",
    elementType: "input",
    elementConfig: {
      type: "text",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  Number: {
    type: controlsTypes.ADDRESS,
    label: "Number",
    elementType: "input",
    elementConfig: {
      type: "text",
    },
    value: "",
    validation: {
      required: false,
    },
    valid: false,
    touched: false,
  },

  Communication: {
    type: controlsTypes.COMMUNICATION,
    label: "Communication",
    elementType: "input",
    elementConfig: {
      type: "text",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  Status: {
    type: controlsTypes.STATUS,
    label: "Status",
    elementType: "select",
    elementConfig: {
      options: [
        { value: "open", displayValue: "Open" },
        { value: "process", displayValue: "Process" },
        { value: "closed", displayValue: "Closed" },
        { value: "not interested", displayValue: "Not interested" },
      ],
    },
    value: "",
    validation: {
      required: true,
    },
    valid: true,
    touched: false,
  },
}
return controls;
};
