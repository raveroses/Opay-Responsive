export default function About() {
  return (
    <>
      <div className="about-us-img">
        <img src="/images/about.png" alt="about-image " />
        <div className="absolute-content">
          <h5>About us</h5>
          <div className="white-board">
            <div className="white-content">
              <div className="opay2-img">
                <img src="/images/opay.png" alt="opay" />
              </div>
              <div className="pp">
                {" "}
                <p>
                  OPay Digital Services Limited is a leading payment and
                  financial service platform. Our mission is to drive financial
                  inclusion by providing efficient and convenient payment
                  services, as we fully believe that no one should be denied
                  access to participate in the world economy. As of now, we have
                  offered accessible financial solutions to over 30 million
                  consumers and 1 million businesses of all sizes.
                </p>
                <p>
                  We are a global company with footprints in many emerging
                  markets across Asia, Africa and Latin America. Our journey in
                  Nigeria started in 2018 and we are strictly licensed and
                  regulated by the Central Bank of Nigeria (CBN) and insured by
                  the Nigeria Deposit Insurance Corporation (NDIC). Today in
                  Nigeria, OPay Business has built the largest business network
                  with our merchants covering all 36 states.
                </p>
              </div>
            </div>
            <div className="opay-img">
              <img src="/images/opay.png" alt="opay" />
            </div>
          </div>
        </div>
      </div>

      <div className="company">
        <h5 className="display">Company Values</h5>

        <div className="puzzle">
          <div className="puzzle-one">
            <div className="puzzle-image2">
              <img src="/images/knuckle.png" alt="tech" />
            </div>
            <div className="puzzle-content">
              <h5>Entrepreneurship</h5>

              <p>
                Create opportunities and solve pain points with collaboration
                and passion for the industry
              </p>
            </div>

            <div className="puzzle-image">
              <img src="/images/knuckle.png" alt="tech" />
            </div>
          </div>

          <div className="puzzle-one">
            <div className="puzzle-image2">
              <img src="/images/tech.png" alt="tech" />
            </div>
            <div className="puzzle-image">
              <img src="/images/3stones.png" alt="tech" />
            </div>
            <div className="puzzle-content">
              <h5> Diversity</h5>

              <p>
                Embrace people from diversified backgrounds and acknowledge the
                interdependence as humans
              </p>
            </div>
          </div>
          <div className="puzzle-one">
            <div className="puzzle-image2">
              <img src="/images/3stones.png" alt="tech" />
            </div>
            <div className="puzzle-content">
              <h5> Innovation</h5>

              <p>
                Ride on advanced technologies to nourish an innovation-driven
                working environment
              </p>
            </div>

            <div className="puzzle-image">
              <img src="/images/innovation.png" alt="tech" />
            </div>
          </div>
          <div className="puzzle-one">
            <div className="puzzle-image2">
              <img src="/images/communty.png" alt="tech" />
            </div>
            <div className="puzzle-image">
              <img src="/images/communty.png" alt="tech" />
            </div>
            <div className="puzzle-content">
              <h5>Community</h5>

              <p>
                Enhance our synergy by creating a vibrant community with great
                people and great cultures
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
