import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <div id="id">
          <div id="nav-p1">
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#0062c7" }}
            ></i>
            <div id="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div id="nav-p2">
            <div id="feed-container">
              <div className="feed-div">
                <i className="fa-solid fa-house"></i>
                <h5>Home</h5>
              </div>
              <div className="feed-div">
                <i className="fa-solid fa-user-plus"></i>
                <h5>My Network</h5>
              </div>
              <div className="feed-div">
                <i className="fa-solid fa-briefcase"></i>
                <h5>Job</h5>
              </div>
              <div className="feed-div">
                <i className="fa-solid fa-comment-dots"></i>
                <h5>Messaging</h5>
              </div>
              <div className="feed-div">
                <i className="fa-solid fa-bell"></i>
                <h5>Notifications</h5>
              </div>
                          <Link to="/profile">
                          <div id="me" className="feed-div">
                <img
                  src="https://source.unsplash.com/random/profile"
                  alt="Profile"
                  />
                <h5>
                  Me<i className="fa-solid fa-sort-down"></i>
                </h5>
              </div>
                  </Link>
            </div>
            <div id="feed-container-p2">
              <i className="fa-solid fa-bars-staggered"></i>
              <h5>
                For Business<i className="fa-solid fa-sort-down"></i>
              </h5>
            </div>
            <div id="feed-container-p2">
              <h5>
                Unlock<i className="ri-money-rupee-circle-line"></i>1,000 in
                <br />
                for free job credits
              </h5>
            </div>
          </div>
          <span className="icon" id="icon">
            ☰
          </span>
        </div>
      </header>
    </div>
  );
}

export default Header