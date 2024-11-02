import { FaPhoneAlt } from "react-icons/fa";
export default function Solution() {
  return (
    <>
      <div className="hero">
        <img src="/images/hero.png" alt="hero" className="reel" />

        <div className="innovative">
          <h5>
            <span>Innovative</span> Payment Solutions for Your Business
          </h5>
          <p>
            By understanding your business models and identifying pain points,
            OPay Business provides customized industrial solutions with
            ready-made products to help you outpace competitors.
          </p>

          <div className="grid-image">
            <div className="gridy-img">
              <img src="/images/engr.png" alt="" />
            </div>
            <div className="gridy-img">
              {" "}
              <img src="/images/doc.png" alt="" />
            </div>
            <div className="gridy-img">
              {" "}
              <img src="/images/att.png" alt="" />
            </div>
            <div className="gridy-img">
              <img src="/images/dri.png" alt="" />
            </div>
            <div className="gridy-img">
              <img src="/images/far.png" alt="" />
            </div>
            <div className="gridy-img">
              {" "}
              <img src="/images/tech.png" alt="" />
            </div>
          </div>
        </div>
        <div className="main-page">
          <div className="item">
            <img src="/images/item.png" alt="item" />
            <h5>Digitize value chains</h5>
            <p>
              Get different payment collection tools and integration services to
              meet your specific business needs.
            </p>
          </div>
          <div className="item">
            <img src="/images/item2.png" alt="item" />
            <h5> Automate payment collection processes</h5>
            <p>
              Avoid man-made mistakes and enhance efficiency in collection,
              settlement & reconciliation.
            </p>
          </div>
          <div className="item">
            <img src="/images/item3.png" alt="item" />
            <h5>Eliminate potential business risks</h5>
            <p>
              Enhance the security of funds along your business operation
              journey.
            </p>
          </div>
          <div className="item">
            <img src="/images/item4.png" alt="item" />
            <h5>Expand sales channels</h5>
            <p>
              Create your online website with ease and manage inventory, sales,
              and customers anywhere you want.
            </p>
          </div>
          <div className="item">
            <img src="/images/item5.png" alt="item" />
            <h5>
              Enhance customer loyalty and improve repeat purchase rate
            </h5>{" "}
            <p>
              Provide exceptional customer experiences with loyalty programs and
              reward systems
            </p>
          </div>
          <div className="item">
            <img src="/images/item6.png" alt="item" />

            <p>....</p>
          </div>
          <div className="contact-opay meat">
            <FaPhoneAlt className="ikk" />
            Contact Opay
          </div>
        </div>
      </div>
    </>
  );
}
