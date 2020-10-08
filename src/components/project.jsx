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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png) center / cover",
              }}
            >
              Javascript Project #1
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/470xauto/2ea638bf5532abe5081dabb0fbecbc2d/mongo-db-logo.png) center / cover",
              }}
            >
              MongoDB Project #1
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://www.mattlayman.com/img/python-django.png) center / cover",
              }}
            >
              Django Project #1
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg) center / cover",
              }}
            >
              MERN Project #1
            </CardTitle>
            <CardText>This is the description of my project</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
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
        <h1>My projects</h1>
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

        <section className="projects=grid">
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
