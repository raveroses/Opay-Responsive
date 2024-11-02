import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleBurger = () => {
    setShow((prev) => !prev);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <nav className="navs">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            <li>
              <Link to="/solution">Solution</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="nav">
        <div className="logos">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div
          className="burger"
          style={{ fontSize: "25px", display: show ? "none" : "block" }}
          onClick={handleBurger}
        >
          <GiHamburgerMenu />
        </div>
        <div
          className="close"
          style={{ display: show ? "block" : "none" }}
          onClick={() => {
            handleClose();
          }}
        >
          {" "}
          <img src="/images/icon-close.svg" alt="minus" />
        </div>
        <div className="link" style={{ display: show ? "block" : "none" }}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/payment">Payment</a>
            </li>
            <li>
              <a href="/solution">Solution</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
