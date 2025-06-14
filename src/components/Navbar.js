import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/hot">
                🔥 Iconic
            </NavLink>
            <NavLink to="/regular">
                📦 All
            </NavLink>
            <NavLink to="/add">
                ➕ Add
            </NavLink>
        </nav>
    );
};

export default Navbar;