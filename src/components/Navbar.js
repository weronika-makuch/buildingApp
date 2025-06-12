import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/hot" className={({ isActive }) => isActive ? "active" : ""}>
                🔥 Iconic
            </NavLink>
            <NavLink to="/regular" className={({ isActive }) => isActive ? "active" : ""}>
                📦 All
            </NavLink>
            <NavLink to="/add" className={({ isActive }) => isActive ? "active" : ""}>
                ➕ Add
            </NavLink>
        </nav>
    );
};

export default Navbar;