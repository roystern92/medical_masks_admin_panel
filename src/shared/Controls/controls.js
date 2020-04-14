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
export const editControlsTypes = {
  FULLNAME: "full name",
  ADDRESS: "address",
  STATUS: "status",
  COMMUNICATION: "communication",
};

export const editOrderControls = {
  FirstName: {
    type: editControlsTypes.FULLNAME,
    label: "First Name",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  LastName: {
    type: editControlsTypes.FULLNAME,
    label: "Last Name",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  City: {
    type: editControlsTypes.ADDRESS,
    label: "City",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  Street: {
    type: editControlsTypes.ADDRESS,
    label: "Street",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  Number: {
    type: editControlsTypes.ADDRESS,
    label: "Number",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: false,
    },
    valid: false,
    touched: false,
  },

  Communication: {
    type: editControlsTypes.COMMUNICATION,
    label: "Communication",
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "exemple@site.com",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },

  Status: {
    type: editControlsTypes.STATUS,
    label: "Status",
    elementType: "select",
    elementConfig: {
      options: [
        { value: "open", displayValue: "Open" },
        { value: "process", displayValue: "Process" },
        { value: "closed", displayValue: "Closed" },
        { value: "not interested", displayValue: "Not interested" }
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
