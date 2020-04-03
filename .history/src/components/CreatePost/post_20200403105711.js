import React, { Component } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

export default class Post extends Component {
  state = {
    id: "",
  };
  handleUpvote = event => {
    let payload = this.props.id;
    fetch("http://localhost:8000/api/ghostpost/" + payload + "/upvote")
      .then(res => res.json())
      .then(data => {
        this.setState({ like: data });
        window.location.reload();
      });
  };

  handleDownvote = event => {
    let payload = this.props.id;
    fetch("http://localhost:8000/api/ghostpost/" + payload + "downvote")
      .then(res => res.json())
      .then(data => {
        this.setState({ like: data });
        window.location.reload();
      });
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardGroup>
            <p>
              {this.props.message} <br />{" "}
              {
                this.props.time
                  .split("T")
                  .join(" ")
                  .split(".")[0]
              }
            </p>
            
            <Button onClick={this.handleUpvote}>Upvote</Button>
            &nbsp;
            <Button onClick={this.handleDownvote}>Downvote</Button>
            <br />
            <p>
              <b>{this.props.total_count}</b>
            </p>
          </CardGroup>
        </Card>
        <br />
      </React.Fragment>
    );
  }
}
