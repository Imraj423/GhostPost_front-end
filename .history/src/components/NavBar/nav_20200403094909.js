// import React from "react";

// export default function NavPage() {

//     return (
//       <div>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/form">Post a Boast or a Roast</a>
//           </li>
//           <li>
//             <a href="/boasts">All the Boasts</a>
//           </li>
//           <li>
//             <a href="/roasts">All the Roast</a>
//           </li>
//           <li>
//             <a href="/upvotes">Top Voted</a>
//           </li>
//           <li>
//             <a href="/downvotes">Most Downvoted</a>
//           </li>
//         </ul>
//       </div>
//     );
//   }


import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Nav = props => {
  return (
    <div>
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <p>Link Based</p>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
        <NavLink href="#">Another Link</NavLink>{" "}
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </Nav>
    </div>
  );
};

export default Nav;
