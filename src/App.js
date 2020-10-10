import React, { Component } from "react";
import {
  Layout,
  Header,
  Textfield,
  Drawer,
  Navigation,
  Content,
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}></span>
                <strong>Kareem Draz</strong>
              </span>
            }
          >
            <Navigation>
              <Link to="/Aboutme">Profile</Link>
              <Link to="/MyResume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer title="Kareem Draz">
            <Navigation>
              <Link to="/Aboutme">Profile</Link>
              <Link to="/MyResume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
