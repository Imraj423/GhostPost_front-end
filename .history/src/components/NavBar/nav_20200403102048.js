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


import React, { useState } from "react";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <p>Boast or Roast</p>
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
            <DropdownToggle>
              <DropdownToggle>
                <NavLink href="/boasts">Show Boasts</NavLink>
              </DropdownToggle>
            <DropdownItem>
              <DropdownToggle>
                <NavLink href="/roasts">Show Roasts</NavLink>
              </DropdownToggle>
            </DropdownItem>
            <DropdownItem>
              <DropdownToggle>
                <NavLink href="/upvotes">Upvoted</NavLink>
              </DropdownToggle>
            </DropdownItem>
            <DropdownItem>
              <DropdownToggle>
                <NavLink href="/downvotes">Downvoted</NavLink>
              </DropdownToggle>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
      <hr />
    </div>
  );
};

export default Navi;


