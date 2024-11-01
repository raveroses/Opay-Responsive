import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img src="/images/footer-logo.png" alt="footer-logo" />
      </div>
      <div className="footer-second-flex">
        <div className="content-flex">
          {" "}
          <h5>Payments</h5>
          <h5>Solutions</h5>
          <h5>About OPay</h5>
        </div>

        <div className="footer-flex">
          <div className="foot-first">
            <p>
              <img src="/images/location.png" alt="icon" /> Lagos
            </p>
            <p>
              {" "}
              Plot 9, Dr. Nurudeen Olowopopo Avenue, Central Business District,
              Alausa 100212, Ikeja, Lagos, Nigeria{" "}
            </p>
            <p> Over 24 physical branches across the nation.</p>
          </div>
          <div className="foot-second">
            <a href=""> Contact with us </a>
            <a href="">pos-service@opay-inc.com</a>
            <div className="docial">
              <CiFacebook className="social" />
              <FaInstagram className="social" />
              <BsTwitterX className="social" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
