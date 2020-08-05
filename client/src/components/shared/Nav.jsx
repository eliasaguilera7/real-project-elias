import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function Nav ({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Real Estate</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>




          <li className="nav-item">
              <Link to="/resources" className="nav-link">Appointments</Link>
          </li>


          <li className="nav-item">
          {user ? (
                <Fragment>
                  <Link to="/resources/new" className="nav-link">New Post</Link>
                </Fragment>
              ) : null}
          </li>


        </ul>
      
        <ul className="navbar-nav">
          {user ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                <i className="fa fa-sign-out"></i>
                Logout
              </Link>
            </li>
          ) : (
            <Fragment>
              <li className="nav-item">
                <Link to="/Register" className="nav-link">
                  <i className="fa fa-user-plus"></i>
                  Register
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fa fa-sign-in"></i>
                  Login
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;





