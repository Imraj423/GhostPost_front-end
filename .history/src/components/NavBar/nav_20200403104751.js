import React from "react";
import { Button } from "reactstrap";

export default function Navi() {

    return (
      <div className="navbar">
        <Button>
          <a href="/">Home</a> |<a href="/form">Post a Boast or a Roast</a>
        </Button>
        <Button>
          <a href="/boasts">All the Boasts</a>
        </Button>
        <Button>
          <a href="/roasts">All the Roast</a>
        </Button>
        <Button>
          <a href="/upvotes">Top Voted</a>
        </Button>
        <Button>
          <a href="/downvotes">Most Downvoted</a>
        </Button>
      </div>
    );
  }


