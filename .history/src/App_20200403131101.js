import React, { Component } from "react";
import PostList from "./components/PostView/postlist";
import Form from "./components/Form/form";
import Main from "./components/Home/main";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    ghostpost: [],
    input: "",
    boast: ""
  };
  componentDidMount() {
    fetch("http://localhost:8000/api/ghostpost/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ ghostpost: data });
      });
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/form" render={() => <Form />} />

        <Route
          exact
          path="/boasts"
          render={() => (
            <PostList
              deletePost={this.deletePost}
              ghostpost={this.state.ghostpost.filter(
                posts => posts.is_Boast === true
              )}
            />
          )}
        />

        <Route
          exact
          path="/roasts"
          render={() => (
            <PostList
              deletePost={this.deletePost}
              ghostpost={this.state.ghostpost.filter(
                posts => posts.is_Boast === false
              )}
            />
          )}
        />

        <Route
          exact
          path="/upvotes"
          render={() => (
            <PostList
              deletePost={this.deletePost}
              ghostpost={this.state.ghostpost.sort((x, y) => {
                return y.total_count - x.total_count;
              })}
            />
          )}
        />

        <Route
          exact
          path="/downvotes"
          render={() => (
            <PostList
              deletePost={this.deletePost}
              ghostpost={this.state.ghostpost.sort((x, y) => {
                return x.total_count - y.total_count;
              })}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
