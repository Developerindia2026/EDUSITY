import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const location = useLocation();

  const isUnderDevelopment =
  location.pathname === "/UnderDevelopment" ||
  location.pathname === "/Career" ||
  location.pathname === "/career/admin/dashboard";

  const [navDark, setNavDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavDark(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={navDark || isUnderDevelopment ? "navbar nav-dark" : "navbar"}
      >
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Edusity Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/UnderDevelopment">Programs</Link>
            </li>

            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <Link to="/career">Career</Link>
            </li>

            <li>
              <Link to="/UnderDevelopment">Results</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Contact Button */}
        <div className="contact-btn">
          <Link to="/career/admin/dashboard">
            <button>Admin Panel</button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="active-menu" onClick={() => setMenuOpen(true)}>
          <MenuIcon fontSize="large" />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={menuOpen ? "mobile-active-bar active" : "mobile-active-bar"}
      >
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <CloseIcon fontSize="large" />
        </div>

        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/UnderDevelopment" onClick={() => setMenuOpen(false)}>
              Programs
            </Link>
          </li>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/career" onClick={() => setMenuOpen(false)}>
              Career
            </Link>
          </li>

          <li>
            <Link to="/UnderDevelopment" onClick={() => setMenuOpen(false)}>
              Results
            </Link>
          </li>
        </ul>

        <a
          href="#contact"
          className="mobile-contact-btn"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </a>
      </div>
    </>
  );
}

export default Navbar;
