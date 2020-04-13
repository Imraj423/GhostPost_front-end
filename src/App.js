import React, { Component } from "react";
import PostList from "./components/PostView/postlist";
import Form from "./components/Form/form";
import Main from "./components/Home/main";

import { Route } from "react-router-dom";

class App extends Component {
  state = {
    ghostpost: [],
    message: "",
    boast: "",
  };
  componentDidMount() {
    fetch("http://localhost:8000/api/ghostpost/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          ghostpost: data,
        });
      });
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/create" render={() => <Form />} />

        <Route
          exact
          path="/boasts"
          render={() => (
            <PostList
              ghostpost={this.state.ghostpost.filter(
                (posts) => posts.is_Boast === true
              )}
            />
          )}
        />

        <Route
          exact
          path="/roasts"
          render={() => (
            <PostList
              ghostpost={this.state.ghostpost.filter(
                (posts) => posts.is_Boast === false
              )}
            />
          )}
        />

        <Route
          exact
          path="/upvotes"
          render={() => (
            <PostList
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

//tried this way with hooks but it messed up the mapping of ghostpost in another component.//
// import PostList from "./components/PostView/postlist";
// import Form from "./components/Form/form";
// import Main from "./components/Home/main";

// import { Route } from "react-router-dom";

// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [ghostpost, setGhostpost] = useState("");
//   const [message, setMessage] = useState("");
//   const [boast, setBoast] = useState("");
//   const sortByUpvote = () => {
//     const sortedUp = ghostpost.sort((a, b) => {
//       return b.total_count - a.total_count;
//     });

//     sortByUpvote(sortedUp);
//   };
//   const sortByDownVote = () => {
//     const sortedDown = ghostpost.sort((a, b) => {
//       return a.total_count - b.total_count;
//     });
//     sortByDownVote(sortedDown);
//   };

//   fetch("http://127.0.0.1:8000/api/ghostpost/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       boast,
//       message,
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       setGhostpost(true);
//     });

//   return (
//     <React.Fragment>
//       <Route exact path="/" render={() => <Main />} />{" "}
//       <Route exact path="/form" render={() => <Form />} />
//       <Route
//         exact
//         path="/boasts"
//         render={() => (
//           <PostList
//             ghostpost={ghostpost.filter((posts) => posts.setBoast === true)}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/roasts"
//         render={() => (
//           <PostList
//             ghostpost={setGhostpost.filter((posts) => posts.setBoast === false)}
//           />
//         )}
//       />
//       <Route
//         exact
//         path="/upvotes"
//         render={() => <PostList ghostpost={sortByUpvote} />}
//       />
//       <Route
//         exact
//         path="/downvotes"
//         render={() => <PostList ghostpost={sortByDownVote} />}
//       />{" "}
//     </React.Fragment>
//   );
// }
