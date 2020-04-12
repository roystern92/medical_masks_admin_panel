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



export const filterControl = {
    Email: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: '{"filter" : "example"}'
        },
        value: '',
        valid: false,
    },
};