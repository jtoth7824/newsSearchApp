import React from "react";
import { Link, useLocation } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    const location = useLocation();

      return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="mr-auto brand font-weight-bold" >
                Hacker News Search
            </div>
                <div className="navbar navbar-expand-lg bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link  to="/search" className={location.pathname === "/search"
                                    ? "menuNavLink aboutTextColor font-weight-bold active"
                                    : "menuNavLink aboutTextColor"
                                    }>
                                    Search
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/history" className={location.pathname === "/history"
                                        ? "menuNavLink aboutTextColor font-weight-bold active"
                                        : "menuNavLink aboutTextColor"
                                    }>
                                    History
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
  );
}

export default Navbar;
