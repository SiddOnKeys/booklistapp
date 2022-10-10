import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrapper flex">
      <div className="navbar flex">
        <h1>BookList</h1>

        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="sidd">
            <li>Sidd</li>
          </NavLink>
          <NavLink to="about">
            <li>About</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
