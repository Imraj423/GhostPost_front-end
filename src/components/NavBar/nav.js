import React from "react";
import { Button } from "reactstrap";

export default function Navi() {

    return (
      <div className="navbar">
        <Button>
          <a href="/">Home</a>
        </Button>
        &nbsp;
        <Button>
          <a href="/create">Post a Boast or a Roast</a>
        </Button>
        &nbsp;
        <Button>
          <a href="/boasts">All the Boasts</a>
        </Button>
        &nbsp;
        <Button>
          <a href="/roasts">All the Roast</a>
        </Button>
        &nbsp;
        <Button>
          <a href="/upvotes">Top Voted</a>
        </Button>
        &nbsp;
        <Button>
          <a href="/downvotes">Most Downvoted</a>
        </Button>
      </div>
    );
  }


