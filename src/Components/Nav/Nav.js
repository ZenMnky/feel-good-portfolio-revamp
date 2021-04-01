import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="mb-4">
      <NavLink className="text-gray-500 font-mono m-1" to="/about">
        About
      </NavLink>
      <NavLink className="text-gray-500 font-mono m-1" to="/">
        Projects
      </NavLink>
    </nav>
  );
};

export default Nav;
