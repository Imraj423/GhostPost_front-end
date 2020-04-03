import React from 'react';
import PostList from "../PostView/postlist";

export default class Main extends React.Component {
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
                 deletePost = secret_id => {
                   fetch(
                     "http://localhost:8000/api/ghostpost/" +
                       secret_id +
                       "/remove",
                     {
                       method: "delete"
                     }
                   )
                     .then(res => res.json())
                     .then(id => {
                       for (let i = 0; i < this.state.ghostpost.length; ++i) {
                         if (this.state.ghostpost[i].id === id[0])
                           setState([
                             ...this.state.ghostpost.slice(0, i),
                             ...this.state.ghostpost.slice(i + 1)
                           ]);
                       }
                     });
                 };
                 render() {
                   return (
                     <React.Fragment>
                       <PostList ghostpost={this.state.ghostpost} />
                     </React.Fragment>
                   );
                 }
               }
