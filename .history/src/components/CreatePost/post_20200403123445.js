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
    fetch("http://localhost:8000/api/ghostpost/" + payload + "/downvote")
      .then(res => res.json())
      .then(data => {
        this.setState({ like: data });
        window.location.reload();
      });
      event.preventDefault()
  };

  deletePost = secret_id => {
    fetch(`${BASE_URL}/${secret_id}/remove`, {
        method: 'delete'
    })
    .then(res => res.json())
    .then(id => {
      for(let i = 0; i < posts.length; ++i){
          if (posts[i].id === id[0])
              setPosts([
                  ...posts.slice(0, i),
                  ...posts.slice(i + 1)
              ])
        }
    })
}

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
            &nbsp;
            <Button onClick={this.deletePost}>Delete</Button>
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
