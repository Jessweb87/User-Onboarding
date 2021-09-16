//import react
import React from 'react';

//Create function
export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        /* THIS IS HOW YOU FIX THE CHECKBOXES */
        const { name, value, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change( name, valueToUse );
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form submit'>
                <h2>Add a User</h2>
                {/* DISABLE THE BUTTON HERE */}
                <button disabled={disabled}>Submit</button>
                
                <div className='errors'>
                {/* PUT THE VALIDATION ERRORS HERE*/}
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            
            <div className='form inputs'>
                <h4>General Information</h4>

                {/*/////// TEXT INPUTS HERE//////// */}
                <label>Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />    
                </label>
                <label>Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        text='text'
                    />
                </label>
                <label>Password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>
            <div className='form checkboxes'>
                <h4>Terms</h4>
                {/*/////// CHECKBOXES GO HERE /////// */}
                <label>Agree 
                    <input
                        type="checkbox"
                        name="agree"
                        checked={values.agree}
                        onChange={onChange}
                    />
                </label>
                <label>Disagree
                    <input
                        type="checkbox"
                        name="disagree"
                        checked={values.disagree}
                        onChange={onChange}
                    />
                </label>

            </div>
        </form>
    )
}


