import React, { useState, useHistory } from "react";
import axios from "axios";

const history = useHistory()

const initialValues = {
  username: '',
  password: '',
}




const Login = (e) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialValues)


 


   const handleChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/protected')
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
   }

  return (
    <>
        <div className='container'>
        <h1>Bubble App</h1>
        <div className='login'>
          <form  onSubmit={handleSubmit}>
            <label>Username:</label>
            <input 
              type='text'
              name='username'
              placeholder='username'
              value={formValues.username}
              onChange={handleChanges}
            />
            <label>Password:</label>
            <input 
              type='text'
              name='password'
              placeholder='password'
              value={formValues.password}
              onChange={handleChanges}
            />
            <button>login</button>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.