import React from 'react';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          PIYUWEB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Replaced NavLink with a */}
              <a
                className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`}
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* Replaced NavLink with a */}
              {/* <a
                className={`nav-link ${window.location.pathname === '/about' ? 'active' : ''}`}
                href="/about"
              >
                About
              </a> */}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DOWNTOWN
              </a>
              <ul className="dropdown-menu">
                <li>
                  {/* Replaced NavLink with a */}
                  <a
                    className="dropdown-item"
                    onClick={props.changegreen}
                    href="/#"
                  >
                    Green
                  </a>
                </li>
                <li>
                  {/* Replaced NavLink with a */}
                  <a
                    className="dropdown-item"
                    onClick={props.changered}
                    href="/#"
                  >
                    Red
                  </a>
                </li>
                <li>
                  {/* Replaced NavLink with a */}
                  <a
                    className="dropdown-item"
                    onClick={props.changeyellow}
                    href="/#"
                  >
                    Yellow
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'grey' : 'white'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              {props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

