import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
  CardMenu,
  IconButton,
} from "react-mdl";

class Project extends Component {
  state = { activeTab: 0 };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is Javascript</h1>
          <Card shadow={5} style={{ minWidth: "650px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://raw.git.generalassemb.ly/KareemD123/GoFish_Project/master/gofish.JPG?token=AAAHEOZ4OCGU4WVOY3OKXQC7RCV36) center / cover",
              }}
            >
              Javascript Project
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button
                href="https://git.generalassemb.ly/KareemD123/GoFish_Project"
                target="_blank"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "black" }} name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is MongoDB</h1>
          <Card shadow={5} style={{ minWidth: "650px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/KareemD123/YuGiOh/master/YuGiOhMainPage.JPG) center / cover",
              }}
            >
              Express/MongoDB Project
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button
                href="https://github.com/KareemD123/YuGiOh"
                target="_blank"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "black" }} name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Django</h1>
          <Card shadow={5} style={{ minWidth: "650px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/KareemD123/job_tracker_app/master/athenascreenshot.JPG) center / cover",
              }}
            >
              Django Project
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button
                href="https://github.com/KareemD123/job_tracker_app"
                target="_blank"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "black" }} name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MERN</h1>
          <Card shadow={5} style={{ minWidth: "650px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://i.imgur.com/h31bQ1C.jpg) center / cover",
              }}
            >
              MERN Project
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button
                href="https://github.com/KareemD123/wordify"
                target="_blank"
                colored
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton style={{ color: "black" }} name="share"></IconButton>
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tab">
        <h1>My Projects</h1>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Javascript</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Django</Tab>
          <Tab>MERN</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Project;
