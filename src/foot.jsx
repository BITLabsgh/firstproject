// import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './foot.css'
import bitlab from "./images/bitlab-logo.svg"

const Foot = () => {
    return (
      <div className="footer">
        {/* <img src="./bitlab-logo.svg" alt="" />
        <div className="icons">
          <FaFacebook className="icon1" />
          <FaInstagram className="icon2" />
          <FaTwitter className="icon3" />
        </div>
        <div className="quicklinks">
          <h4>Quick Links</h4>
        </div>
      */}
        <div className="sb__footer  section__padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>Quick Links</h4>
              <a className="unclickable" href="/employer">
                <p>Projects</p>
              </a>{" "}
              <a className="unclickable" href="/employer">
                <p>Teams</p>
              </a>{" "}
              <a className="unclickable" href="/employer">
                <p>FAQs</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Company</h4>
              <a className="unclickable" href="/employer">
                <p>About Us</p>
              </a>{" "}
              <a className="unclickable" href="/employer">
                <p>Services</p>
              </a>{" "}
              <a className="unclickable" href="/employer">
                <p>Contact</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Contact</h4>
              <a className="unclickable" href="/employer">
                <p>+233 59 277 1234</p>
                <p>0240894565</p>
                <p>+1 (540) 617-2840</p>
              </a>{" "}
              <a className="unclickable" href="/employer">
                <p>info@bismuthinc.com</p>
              </a>{" "}
              <a className="unclickable" href="/employer">
                <p>
                  135 Mankessim
                  <br />
                  <br /> Kumasi Road
                </p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <div className="socialmedia">
                <img src={bitlab} alt="" />
                <p>
                  <img src="" alt="" />
                </p>
                <p>
                  <img src="" alt="" />
                </p>{" "}
                <p>
                  <img src="" alt="" />
                </p>{" "}
                <p>
                  <img src="" alt="" />
                </p>{" "}
                <p>
                  <img src="" alt="" />
                </p>
              </div>
            </div>
          </div>

          <hr />
          <hr />

          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} Bismuth. All right reserved</p>
            </div>
            {/* <div className="sb__footer-below-links">
              <a className="unclickable" href="/terms">
                <div>
                  <p>Terms and Conditions</p>
                </div>
              </a>
              <a className="unclickable" href="/terms">
                <div>
                  <p>Terms and Conditions</p>
                </div>
              </a>
              <a className="unclickable" href="/terms">
                <div>
                  <p>Terms and Conditions</p>
                </div>
              </a>
              <a className="unclickable" href="/terms">
                <div>
                  <p>Terms and Conditions</p>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
}
 
export default Foot;