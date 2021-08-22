import React from "react";
import { v4 as uuidv4 } from 'uuid';

interface NavbarProps {
  menu: any[];
}
const Navbar:  React.FC<NavbarProps> = (props: NavbarProps) => {
  const { menu } = props;
  let key = uuidv4();
  return (
    <nav className="navbar-nav">
      {menu && menu.map((item: String, index: Number) => (
        <a href="#" className="nav-link" key={key + index}>
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
