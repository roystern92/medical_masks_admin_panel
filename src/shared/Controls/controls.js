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


    Phone: {
        elementType: 'input',
        elementConfig: {
            type: 'number',
            placeholder: '******'
        },
        value: '',
        validation: {
            required: true,
            minLength: 10
        },
        valid: false,
        touched: false
    },

    Status: {
        elementType: 'select',
        elementConfig: {
            options:[
                {value:  'Male', displayValue: 'Male'},
                {value:  'Female' , displayValue: 'Female'}
            ]
        },
        value: 'Male',
        validation: {
            required: true,
        },
        valid: true,
        touched: false
    },

};