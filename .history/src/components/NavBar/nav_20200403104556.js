import React from "react";

export default function Navi() {

    return (
      <div className="navbar">
       <p> <a href="/">Home</a> |
        <a href="/form">Post a Boast or a Roast</a>
        |
        <a href="/boasts">All the Boasts</a>
        |
        <a href="/roasts">All the Roast</a>
        |
        <a href="/upvotes">Top Voted</a>
        |
        <a href="/downvotes">Most Downvoted</a>
        
      </div>
    );
  }


