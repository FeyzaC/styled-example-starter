import { Link } from "react-router-dom";
import "./Nav.styled";
import { Div } from "./Nav.styled";

const Nav = () => {
  return (
    <Div>
      <Link to="/">Home</Link>
      <Link to="/people">People</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </Div>
  );
};

export default Nav;
