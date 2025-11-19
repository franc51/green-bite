import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // hook to programmatically navigate
  const footerJumpLinks = [
    "Oferte",
    "Sortimente",
    "Green Bite",
    "Lupilu",
    "Bucătăria Green Bite",
    "Părerea ta",
    "Sănătate",
    "Surprize.gb.ro",
    "Raport de sustenabilitate",
  ];
  const footerJumpRoutes = {
    Oferte: "/oferte",
    Sortimente: "/sortimente",
    "Green Bite": "/",
    Lupilu: "/lupilu",
    "Bucătăria Green Bite": "/bucataria-green-bite",
    "Părerea ta": "/parerea-ta",
    Sănătate: "/sanatate",
    "Surprize.gb.ro": "/surprize",
    "Raport de sustenabilitate": "/raport-de-sustenabilitate",
  };
  const footerInfoLinks = [
    "Modalități de plată",
    "Protecția datelor",
    "Cookies",
  ];
  const footerInfoRoutes = {
    "Modalități de plată": "/modalitati-de-plata",
    "Protecția datelor": "/protectia-datelor",
    Cookies: "/cookies",
  };
  const footerImages = {
    AppStore:
      "https://www.bucataria.lidl.ro/_next/static/media/app-store-apple.1dc319da.svg",
    GooglePlay:
      "https://www.bucataria.lidl.ro/_next/static/media/google-play-badge.288029c1.svg",
    AppGalery:
      "https://www.bucataria.lidl.ro/_next/static/media/huawei-store-badge.e2e772bb.svg",
  };

  return (
    <div className="footer_container">
      <div className="footer_division_container">
        <div className="footer_division">
          <h3>Serviciul clienți</h3>
          <p>Luni - Duminică: 08:00 - 19:00 *cu excepția sărbătorilor legale</p>
          <button className="footer_button">Contact</button>
        </div>
        <div className="footer_division">
          <h3>green-bite.ro</h3>
          <ul className="footer_link_list">
            {footerJumpLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="footer_links"
                  href={footerJumpRoutes[link]}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(footerJumpRoutes[link]);
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_division">
          {" "}
          <h3>Informații</h3>
          <ul className="footer_link_list">
            {footerInfoLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="footer_links"
                  href={footerInfoRoutes[link]}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(footerInfoRoutes[link]);
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_division">
          <h3>Newsletter</h3>
          <p>
            Fii la curent cu toate ofertele noastre! Reduceri, concursuri și
            multe alte surprize.
          </p>
          <button className="footer_button">Abonează-te</button>
        </div>
      </div>
      <hr></hr>
      <div className="footer_downloads_container">
        <h3>Descarcă aplicația Green Bite</h3>
        <div className="footer_image">
          {Object.entries(footerImages).map(([key, url]) => (
            <img key={key} src={url} alt={key} style={{ height: "40px" }} />
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Footer;
