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
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  dropdownOpen,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

const Navi = props => {
  return (
    <div>
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="forms">Post</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Sort By
          </DropdownToggle>
          <DropdownMenu>
            <div>
              <NavLink href="/boasts">Show Boasts</NavLink>
            </div>
            <div>
              <NavLink href="/roasts">Show Roasts</NavLink>
            </div>
            <div>
              <NavLink href="/upvotes">Upvoted</NavLink>
            </div>
            <div>
              <NavLink href="/downvotes">Downvoted</NavLink>
            </div>
          </DropdownMenu>
        </Dropdown>
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

export default Navi;
