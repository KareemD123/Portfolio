import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class Aboutme extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/71esWCr.png?1"
              alt="myPicture"
              className="myPicture"
            />
            <div className="banner-text">
              <h1> Full Stack Web Developer </h1>
              <hr />
              <p>
                HTML | CSS | Javascript | ReactJS | NodeJS | Express |
                Mongoose/MongoDB | PostgreSQL
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://www.linkedin.com/in/kareem-draz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/KareemD123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
