import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul className="ul-header">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="map">
          <li>Map</li>
        </NavLink>
        <NavLink to="astroPic">
          <li> Astronomy</li>{" "}
        </NavLink>
        <NavLink to="testApi">
          <li> Nasa Media</li>{" "}
        </NavLink>

        <NavLink to="getData">
          <li>Imapct Craters</li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Nav;
