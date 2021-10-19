import React from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const { signInUsingGoogle, signInUsingGithub ,handleEmailChange, handlePasswordChange, handleRegistration, error, toggleLogin, isLogin, handleResetPassword} = useAuth();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = e => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = e => {
  //   setPassword(e.target.value);
  // };

  // const handleRegistration = e => {
  //   console.log(email, password);
  //   e.preventDefault();
  // };

  return (
    <div className="text-center">
      <h2 className="my-5">Please {isLogin ? 'Login': ' Register Here'}</h2>
      <form onSubmit={handleRegistration} className="w-50 m-auto text-start">
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label ">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input mt-2"
                type="checkbox"
                id="gridCheck1"
                onChange={toggleLogin}
              />
              <label className="form-check-label" htmlFor="gridCheck1">
              Already Registered?
              </label>
              <button onClick={handleResetPassword} style={{textDecoration: 'none', color: '#000'}} type="button" className="btn btn-link ms-5">Reset Passsword</button>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger ms-2">{error}</div>
        <button type="submit" className="btn btn-dark text-white">
          {isLogin ? 'Login' : 'Register'}
        </button>
        
      </form>
      <br />
      <br />
      <Button
        onClick={signInUsingGoogle}
        variant="dark"
        className="me-2"
        size="sm"
      >
        Google Sign In
      </Button>
      <Button onClick={signInUsingGithub} variant="dark" size="sm">
        Github Sign In
      </Button>
    </div>
  );
};

export default Login;
