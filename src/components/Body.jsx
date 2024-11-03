import { FaPhoneAlt } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Body() {
  return (
    <div className="padding">
      <div className="body-flex">
        <div className="hand">
          <img src="/images/hands.png" alt="hands" />
        </div>
        <div className="first">
          <h2>Reliable, Fast & Safe Payments</h2>
          <p>Get omnichannel payment solutions to grow your business better!</p>
          <div className="lincences">
            <div className="real-license">
              <div className="li">Licensed by CBN</div>
              <div className="img">
                <img src="/images/cbn.png" alt="cbn" />
              </div>
            </div>

            <div className="insure">
              <div className="li"> Insured by </div>
              <div className="im">
                <img src="/images/ndic.png" alt="ndic" />
              </div>
            </div>
          </div>
          <div className="contact">Contact us</div>
          <div className="lincence">
            <div className="real-license">
              <div className="li">Licensed by CBN</div>
              <div className="img">
                <img src="/images/cbn.png" alt="cbn" />
              </div>
            </div>
            <div className="stroke">|</div>
            <div className="insure">
              <div className="li"> Insured by </div>
              <div className="im">
                <img src="/images/ndic.png" alt="ndic" />
              </div>
            </div>
          </div>
        </div>

        <div className="hands">
          <img src="/images/hands.png" alt="hands" />
        </div>
      </div>

      <div className="grid">
        <div className="first">
          <img src="/images/first.png" alt="first" />
          <h5>Omnichannel Payments</h5>
          <p>
            Make payment collection safer, easier and faster via multiple
            channels
          </p>
        </div>
        <div className="first">
          <img src="/images/second.png" alt="first" />
          <h5>Industrial Payment Solutions</h5>
          <p>Get a customized payment solution for your business</p>
        </div>
        <div className="first">
          <img src="/images/third.png" alt="first" />
          <h5>Banking & Bill Payments</h5>
          <p>
            Enjoy financial inclusion and efficiency with the largest banking
            agent network
          </p>
        </div>
        <div className="first">
          <img src="/images/fouth.png" alt="first" />
          <h5>Online Sales & Marketing</h5>
          <p>Expand your sales channels from offline to online</p>
        </div>
      </div>
      <div className="sponsor">
        <h2>
          Trusted by over <span>1,000,000 </span>businesses across Nigeria
        </h2>
        <div className="sponsors-images">
          <img src="/images/sponsor.png" alt="sponsor-image" />
          <img src="/images/guiness.png" alt="sponsor-image" />
          <img src="/images/fed.png" alt="sponsor-image" />
          <img src="/images/electro.png" alt="sponsor-image" />
          <img src="/images/film.png" alt="sponsor-image" />
          <img src="/images/ge.png" alt="sponsor-image" />
          <img src="/images/kil.png" alt="sponsor-image" />
          <img src="/images/med.png" alt="sponsor-image" />
          <img src="/images/medix.png" alt="sponsor-image" />
          <img src="/images/pharmacy.png" alt="sponsor-image" />
          <img src="/images/market.png" alt="sponsor-image" />
        </div>
      </div>

      <div className="testimony">
        <div className="box">
          <div className="name">
            <h5> Joshua</h5>
            <FaQuoteRight className="ikon" />
          </div>
          <p>
            Kudos to OPay. I've been using OPay for two years now and I must say
            their transfer services are seamless and swift.
          </p>
        </div>
        <div className="box">
          <div className="name">
            <h5> Ifeanyi</h5>
            <FaQuoteRight className="ikon" />
          </div>
          <p>
            I'm giving OPay five stars because of its seamless services! The
            best experience so far.
          </p>
        </div>
        <div className="box">
          <div className="name">
            <h5> Ibrahim</h5>
            <FaQuoteRight className="ikon" />
          </div>
          <p>
            OPay helps make my daily business easier with its POS machines. The
            collection is fast and it drops to my account instantly.
          </p>
        </div>
      </div>

      <div className="cont">
        <div className="content">Join Us & Grow Your Business Faster</div>
        <div className="contact-opay">
          <FaPhoneAlt className="ikk" />
          Contact Opay
        </div>
      </div>
    </div>
  );
}
