import React from "react";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHeartbeat,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/footer_style.css";

const Footer = () => {
  return (
    <footer class="text-center text-lg-start text-muted footerContainer">
      <section class="d-flex justify-content-center justify-content-lg-between">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faHeartbeat} />
                <span className="p-lg-2 footerItemHeader">Mediplus</span>
              </h6>
              <p>
                Pentru obtinerea de informatii si diverse materiale va rugam sa
                utilizati doar resursele oficiale puse la dispozitie de
                Mediplus. Evitati accesare materialelor externe cu scop
                fraudulos.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <span className="footerItemHeader">Social media</span>
              </h6>
              <p>
                <FontAwesomeIcon icon={faFacebook} />
                <a
                  className="text-decoration-none p-lg-1 footerAnchor"
                  href="#"
                >
                  Facebook
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faYoutube} />
                <a
                  className="text-decoration-none p-lg-1 footerAnchor"
                  href="#"
                >
                  Youtube
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faLinkedin} />
                <a
                  className="text-decoration-none p-lg-1 footerAnchor"
                  href="#"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faTwitter} />
                <a
                  className="text-decoration-none p-lg-1 footerAnchor"
                  href="#"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <span className="footerItemHeader">Linkuri utile</span>
              </h6>
              <p>
                <a className="text-decoration-none footerAnchor" href="#">
                  GDPR
                </a>
              </p>
              <p>
                <a className="text-decoration-none footerAnchor" href="#">
                  Termeni si conditii
                </a>
              </p>
              <p>
                <a className="text-decoration-none footerAnchor" href="#">
                  Informare cookies
                </a>
              </p>
              <p>
                <a className="text-decoration-none footerAnchor" href="#">
                  Informare COVID-19
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="p-lg-1 text-black">contact@mediplus.com</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="p-lg-1 text-black">help@mediplus.com</span>
              </p>
              <p className="text-black">
                <FontAwesomeIcon icon={faPhone} /> +40 71234567
              </p>
              <p className="text-black">
                <FontAwesomeIcon icon={faFax} /> +40 77654321
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="text-center p-4">
        © 2021 Copyright:
        <span className="text-black hr-bold p-lg-1 fs-6">Mediplus.com</span>
      </div>
    </footer>
  );
};

export default Footer;
