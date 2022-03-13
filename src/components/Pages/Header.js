import { Outlet, Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="fixed-header">
            <nav>

                <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Home</Link>
                <Link to="/about" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>About</Link>
                <Link to="/registration" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Registration</Link>
                <Link to="/test" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Test</Link>

            </nav>

            <Outlet />
        </div>
    )
};

export default Header;