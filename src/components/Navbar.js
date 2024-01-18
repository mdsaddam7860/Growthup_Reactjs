// import { NavItems } from "./NavItems";
import { useState } from "react";
import { NavItems } from "./NavItem";
import { Link } from 'react-router-dom'


export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="NavbarItems">
      <h3 className="logo">
        <i className="fab fa-react"></i>GrowthUp
      </h3>
      <div className="Hamburger-Cross-Icons" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={open ? "MenuItems active" : "MenuItems"}>
        {NavItems.map((Item, index) => {
          return (
            <li key={index}>
              <Link to={(Item.url)} className={Item.cName}>
                <i className={Item.icon}></i>
                {Item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
