import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <Link to="/hot" className={location.pathname === "/hot" ? "active" : ""}>
                🔥 Iconic
            </Link>
            <Link
                to="/regular"
                className={location.pathname === "/regular" ? "active" : ""}
            >
                📦 All
            </Link>
            <Link to="/add" className={location.pathname === "/add" ? "active" : ""}>
                ➕ Add
            </Link>
        </nav>
    );
};

export default Navbar;
