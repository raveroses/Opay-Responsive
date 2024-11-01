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
