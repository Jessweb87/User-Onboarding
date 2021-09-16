import * as yup from 'yup';

const formSchema = yup.object({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be 3 characters long!'),
    email: yup  
        .string()
        .email('Must be valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .trim()
        .required('Password is required!')
        .min(8, 'Password must be at least 8 characters long'),
    terms: yup
        .string()
        .oneOf(['agree', 'do not agree'], 'Selection is required!')
})

export default formSchema;