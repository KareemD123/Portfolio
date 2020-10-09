import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Kareem Draz</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              This is my paragraph
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                    +1 (587) 974-8805
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true"></i>
                    +1 (587) 974-8805
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    draz@ualberta.ca
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
        <h1>Contact me</h1>
        <h3>Email: draz@ualberta.ca</h3>
        <h3>Phone: +1 (587) 974-8805</h3>
      </div>
    );
  }
}

export default Contact;
