import React, { useState, useEffect } from 'react'; 
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Component/Form';
import Username from './Component/Username';
import formSchema from './Component/formSchema';




  const intialFormValues ={
    ///// TEXT INPUTS HERE /////
    username: '',
    email: '',
    password: '',
    ///// CHECKBOXES HERE //////
    terms: false,
  }

  const initialFormErrors = {
    username: '',
    email: '',
    password: '',
    terms: '',
  }
  const initialUser = []
  const initialDisabled = true

  export default function App() {
    //// USE STATES HERE //////
      const [ user, setUser ] = useState(initialUser) 
      const [ formValues, setFormValues ] = useState(intialFormValues)
      const [ formErrors, setFormErrors ] = useState(initialFormErrors)
      const [ disabled, setDisabled ] = useState(initialDisabled)

    const getUsers = () => {
      //// Use axios get here //////
      axios.get('https://buddies.com/api/friends')
        .then(res => {
          setUser(res.data);
        }).catch(err => console.error(err))
    }

    const postNewUser = newUser => {
      //// NEWLY CREATED USER HERE USING AXIOS POST//////
      axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
          setUser([res.data, ...user])
          setFormValues(intialFormValues);
        }).catch(err => {
          console.error(err)
          setFormValues(intialFormValues);
        })
    }
    ////// EVENT HANDLERS GO HERE /////
    const inputChange = (username, value ) => {
      setFormValues({
        ...formValues, 
        [username]: value 
      })
    }
    const formSubmit = () => {
      const newUser = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        terms: formValues.terms.trim()
      }
      postNewUser(newUser);
    }

    /////// SIDE EFFECTS ///////
    useEffect(() => {
      getUsers()
    }, [])

    useEffect(() => {
      formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

  return (
    <div className="App">
      <header><h1>User App</h1></header>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        username.map(user => {
          return (
            <Userame key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}
