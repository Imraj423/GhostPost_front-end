import React from "react";

export default function Navi() {

    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/form">Post a Boast or a Roast</a>
          </li>
          <li>
            <a href="/boasts">All the Boasts</a>
          </li>
          <li>
            <a href="/roasts">All the Roast</a>
          </li>
          <li>
            <a href="/upvotes">Top Voted</a>
          </li>
          <li>
            <a href="/downvotes">Most Downvoted</a>
          </li>
        </ul>
      </div>
    );
  }


