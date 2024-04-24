import { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { MdClose } from "react-icons/md";

import MoodContext from "../../context/MoodContext";
import { FiMenu } from "react-icons/fi";

import "./index.css";

class Header extends Component {
  state = { isMenu: false };

  onMenuClick = () => {
    this.setState((prev) => ({ isMenu: !prev.isMenu }));
  };

  //removing jwt token from server side
  onLogout = () => {
    Cookies.remove("jwt_token");
    window.location.replace("/login");
  };

  render() {
    const { isMenu } = this.state;
    const newClassName = isMenu ? "navbar-menu" : "nav-content-lg";
    const newDataTestid = isMenu ? "navbarMenu" : "navContentLg";
    return (
      <MoodContext.Consumer>
        {(value) => {
          const { onHomeClick, onReportClick } = value;

          return (
            <>
              <nav data-testid="navbar" className="navbar">
                <h1 data-testid="navHeading" className="nav-heading">
                  Daily Mood Tracker
                </h1>
                <div data-testid="navContentSm" className="nav-content-sm">
                  <button
                    className="menu-button"
                    type="button"
                    onClick={this.onMenuClick}
                    data-testid="menuButton"
                  >
                    {isMenu ? (
                      <MdClose className="icon" />
                    ) : (
                      <FiMenu className="icon" />
                    )}
                  </button>
                </div>
                <div data-testid={newDataTestid} className={newClassName}>
                  <ul
                    data-testid="navbarMenuContent"
                    className="navbar-menu-content"
                  >
                    <Link onClick={onHomeClick} className="link" to="/">
                      <li data-testid="navLi" className="nav-li">
                        Home
                      </li>
                    </Link>
                    <Link
                      onClick={onReportClick}
                      className="link"
                      to="/reports"
                    >
                      <li data-testid="navLi2" className="nav-li">
                        Reports
                      </li>
                    </Link>
                    <li>
                      <button
                        type="button"
                        onClick={this.onLogout}
                        className="logout-button"
                        data-testid="logoutButton"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </>
          );
        }}
      </MoodContext.Consumer>
    );
  }
}

export default Header;
