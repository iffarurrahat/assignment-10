import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center " style={{ margin: '180px 0px' }}>
      <h1 className="text-danger">404 page</h1>
      <h5 className="text-danger">Nothink In Here Please Go Back</h5>
      <Link to="/home">
        <button className="btn btn-dark">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
