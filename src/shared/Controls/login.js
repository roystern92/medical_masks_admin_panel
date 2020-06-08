export const getLoginControls = () => {
const controls =  {
    Email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "example@site.com",
      },
      value: "",
      validation: {
        required: true
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
    }
  }
 return controls; 
};