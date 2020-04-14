export const apiAuthControl = {
    Email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },


    Password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: '******'
        },
        value: '',
        validation: {
            required: true,
            minLength: 5
        },
        valid: false,
        touched: false
    },

};



export const editOrderControls = {
  
    FirstName: {
        label: 'First Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },

    LastName: {
        label: 'Last Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },

    City: {
        label: 'City',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    Street: {
        label: 'Street',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    
    Number: {
        label: 'Number',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: false
        },
        valid: false,
        touched: false
    },
    


    Communication: {
        label: 'Communication',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },


    Status: {
        label: 'Status',
        elementType: 'select',
        elementConfig: {
            options:[
                {value:  'open', displayValue: 'open'},
                {value:  'process', displayValue: 'process'},
                {value:  'closed' , displayValue: 'closed'}
            ]
        },
        value: '',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },

};