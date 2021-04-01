import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink className="text-gray-500 font-mono m-1" to="/">
        About
      </NavLink>
      <NavLink className="text-gray-500 font-mono m-1" to="/">
        Projects
      </NavLink>
    </nav>
  );
};

export default Nav;
