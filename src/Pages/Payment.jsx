import { FaPhoneAlt } from "react-icons/fa";
export default function Payment() {
  return (
    <div className="pay">
      <div className="payment-main">
        <h2>
          Upgrade Your Business with OPay <span>Omnichannel</span> Payments
          <hr style={{ marginTop: "40px" }} />
        </h2>

        <div className="des">
          <div className="des1">
            <h4> POS Terminals</h4>
            <p>Get POS terminals that meet your specific needs</p>
            <ul>
              <li>Best network uptime & lowest charges</li>
              <li>No delay in receiving payments</li>
              <li>Automated dispute resolution</li>
              <li>Durable hardware & strong battery</li>
              <li>EOD reports for easier reconciliation</li>
              <li>Bill payments & more value-added services</li>
            </ul>
            <div className="apply-pos">Apply for POS</div>
          </div>
          <div className="des2">
            <img src="/images/pos.png" alt="pos" />
          </div>
        </div>
        <div className="des">
          <div className="des2">
            <img src="/images/stand.png" alt="pos" />
          </div>
          <div className="des1">
            <h4>Transfer Number</h4>
            <p>Receive transfers in a safer & faster way</p>
            <ul>
              <li>Receive funds safely with masked accounts</li>
              <li>100% transaction success rate</li>
              <li>Instant voice notifications</li>
              <li>Instant confirmation by branch employees</li>
            </ul>
          </div>
        </div>
        <div className="des">
          <div className="des1">
            <h4> OPay Business App</h4>
            <p>Manage your business at your fingertips</p>
            <ul>
              <li>Collect Payments via multiple channels</li>
              <li>Check transaction history & details in real-time</li>
              <li>Manage branches, employees & customers</li>
              <li>Get access to online sales & more value-added services</li>
            </ul>
            <div className="google-image">
              <img src="/images/google.png" alt="google" />
            </div>
          </div>
          <div className="des2">
            <img src="/images/phone.png" alt="pos" />
          </div>
        </div>
      </div>
      <div className="picture">
        <h5>Online Payments For Everyone</h5>
        <div className="pics-flex">
          <div className="image">
            <img src="/images/full.png" alt="image" />
            <div className="absolute">
              <h5>Full suite of payment options</h5>
              <p>
                Accept payments anytime and everywhere. Payments are made easier
                with OPay.
              </p>
            </div>
          </div>
          <div className="image">
            <img src="/images/frau.png" alt="image2" />
            <div className="absolute">
              <h5>Fraud detection</h5>
              <p>
                We enable Level 1 PCI compliance and set custom fraud
                protections.
              </p>
            </div>
          </div>
          <div className="image">
            <img src="/images/24.png" alt="image3" />
            <div className="absolute">
              <h5>24/7 customer care</h5>
              <p>
                Our team of experts are ready to handle your concerns according
                to your business models all day long.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="under">
        <p>
          Let your customers choose their preferred payment methods and accept
          payments anytime, everywhere.
        </p>
        <a href="#">Apply for OPay Online Gateway ></a>
      </div>
      <div className="payment-footer">
        <h5>
          Get A <span>Professional Dashboard </span>with Visualizations &
          Business Intelligence
        </h5>
        <img src="/images/laptop.png" alt="laptop" />
        <h5 style={{ marginTop: "150px" }}>
          Digitalize the way you handle your business operations
        </h5>
        <div className="boxes">
          <div className="box-1">
            <img src="/images/arch.png" alt="arch" />
            <p>Real-time performance tracking & regular reports</p>
          </div>
          <div className="box-1">
            <img src="/images/fork.png" alt="arch" />
            <p>Branch and employee management with ease</p>
          </div>
          <div className="box-1">
            <img src="/images/naira.png" alt="arch" />
            <p>
              Corporate funds management & flexible settlement configuration
            </p>
          </div>
          <div className="box-1">
            <img src="/images/gris.png" alt="arch" />
            <p>Payroll management & more value-added services</p>
          </div>
        </div>
        <div className="last">
          <h5 style={{ marginTop: "90px" }}>
            {" "}
            Get insights about your business
          </h5>
          <p>
            {" "}
            Access a comprehensive data analysis of your business to help you
            discover your business opportunities and customer purchase
            behaviour. Save time, boost sales and earn more money by getting
            insights on your best-selling products and highest-spending
            customers.
          </p>
        </div>
        <div className="contact-opay">
          <FaPhoneAlt className="ikk" />
          Contact Opay
        </div>
      </div>
    </div>
  );
}
