import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div>
      <h2>This is Login Page</h2>
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
      <br />
      <Link to="/register">New User</Link>
    </div>
  );
};

export default Login;
