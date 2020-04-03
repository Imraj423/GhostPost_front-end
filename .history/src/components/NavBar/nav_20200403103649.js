import React from "react";

export default function Navi() {

    return (
      <div style="flex:displayflex;">
        <a href="/">Home</a> <br />|<br />
        <a href="/form">Post a Boast or a Roast</a>
        <br />|<br />
        <a href="/boasts">All the Boasts</a>
        <br />|<br />
        <a href="/roasts">All the Roast</a>
        <br />|<br />
        <a href="/upvotes">Top Voted</a>
        <br />|<br />
        <a href="/downvotes">Most Downvoted</a>
        <br />|<br />
      </div>
    );
  }


