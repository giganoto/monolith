import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className="nav-section">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/">
              <h1 className="nav-logo">Giganoto</h1>
            </Link>
            <Link to="/dsa">
              <h3>DSA</h3>
            </Link>
            <Link to="/blogs">
              <h3>Blogs</h3>
            </Link>
            <Link to="/watari">
              <h3>Watari</h3>
            </Link>
          </div>
          <div className="nav-right">
            <label className="switch">
              <input type="checkbox" name="" id="" />
              <span className="slider round"></span>
            </label>
            <Link to="/singin">
              <h3 className="singin">Sing in</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
