export const apiAuthControl = {
  Email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: true,
      isEmail: true,
    },
    valid: false,
    touched: false,
  },

  Password: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholder: "******",
    },
    value: "",
    validation: {
      required: true,
      minLength: 5,
    },
    valid: false,
    touched: false,
  },
};
export const controlsTypes = {
  FULLNAME: "full name",
  ADDRESS: "address",
  STATUS: "status",
  COMMUNICATION: "communication",
};

export const editOrderControls = {
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
};

export const createOrderControls = {
  FullName: {
    type: controlsTypes.FULLNAME,
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "שם מלא",
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
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "מספר בית",
    },
    value: "",
    validation: {
      required: false,
    },
    valid: false,
    touched: false,
  },
  Street: {
    type: controlsTypes.ADDRESS,
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "רחוב",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  City: {
    type: controlsTypes.ADDRESS,
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "עיר",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  Ammount: {
    type: controlsTypes.COMMUNICATION,
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "כמות מארזים",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  Communication: {
    type: controlsTypes.COMMUNICATION,
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "אמצעי תקשורת",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  }
};
