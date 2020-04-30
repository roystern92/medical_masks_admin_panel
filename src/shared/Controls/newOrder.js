export const controlsTypes = {
  FULLNAME: "full name",
  ADDRESS: "address",
  STATUS: "status",
  COMMUNICATION: "communication",
};

export const getCreateOrderControls = () => {
  const controls = {
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

    Street: {
      type: controlsTypes.COMMUNICATION,
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "רחוב + מספר בית",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },

    Amount: {
      type: controlsTypes.COMMUNICATION,
      elementType: "select",
      elementConfig: {
        options: [
          { value: "מארז 100 מסכות פנים", displayValue: "מארז 100 מסכות פנים" },
          { value: "מארז 200 מסכות פנים", displayValue: "מארז 200 מסכות פנים" },
          {
            value: "מעוניין/ת בכמות גדולה יותר",
            displayValue: "מעוניין/ת בכמות גדולה יותר",
          },
        ],
      },
      value: "מארז 100 מסכות פנים",
      validation: {
        required: true,
      },
      valid: true,
      touched: false,
    },
    Communication: {
      type: controlsTypes.COMMUNICATION,
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "אמצעי תקשורת(טלפון/מייל/אחר)",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
  };
  return controls;
};
