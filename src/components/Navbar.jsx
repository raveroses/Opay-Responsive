export default function Navbar() {
  return (
    <>
      <nav className="navs">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Solution</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
