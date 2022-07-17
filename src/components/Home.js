import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import hipng from "../images/hi.png";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="HomePage_Layout">
        <div className="Navbar_contact">
          <Link to={"contact"}>
            <button type="button" class="btn btn-light">
              Contact Me
            </button>
          </Link>
        </div>
        <div className="HomePage_Maincontent">
          <div className="Content_1">
            <div>
              <h1>Jeva Stark</h1>

              <h3>Frontend Developer & UI Designer</h3>
              <br />
              <h3>
                Welcome to my website. The Fact that you took the time to visit
                means I have your attention. Looking forward to connect.
              </h3>
              <br />
              <div className="bottom_button">
                <Link to={"about"}>
                  <button type="button" class="btn btn-light">
                    About
                  </button>
                </Link>
                <Link to={"work"}>
                  <button type="button" class="btn btn-light">
                    Work
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="Content_2">
            <div className="imgelement">
              <img src={hipng} alt="emoji" height="500px" width="500px" />
            </div>
          </div>
        </div>
        <div
          className="achievements"
          style={{ height: "300px", width: "500px" }}
        >
          <h3>Python</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: " 30%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3>JavaScript</h3>
          <div class="progress">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style={{ width: " 30%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3>DBMS</h3>
          <div class="progress">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style={{ width: " 40%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <h3>Data Structure</h3>
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style={{ width: " 30%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
