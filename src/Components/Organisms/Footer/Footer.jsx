import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); // hook to programmatically navigate

  const footerLinks = [
    { linkLabel: "Oferte", url: "/oferte" },
    { linkLabel: "Sortimente", url: "/sortimente" },
    { linkLabel: "Green Bite", url: "/" },
    { linkLabel: "Lupilu", url: "/lupilu" },
    { linkLabel: "Bucătăria Green Bite", url: "/bucataria-green-bite" },
    { linkLabel: "Părerea ta", url: "/parerea-ta" },
    { linkLabel: "Sănătate", url: "/sanatate" },
    { linkLabel: "Surprize.gb.ro", url: "/surprize" },
    {
      linkLabel: "Raport de sustenabilitate",
      url: "/raport-de-sustenabilitate",
    },
  ];

  const footerInfoLinks = [
    { linkLabel: "Modalități de plată", url: "/modalitati-de-plata" },
    { linkLabel: "Protecția datelor", url: "/protectia-datelor" },
    { linkLabel: "Cookies", url: "/cookies" },
  ];
  const footerImages = [
    {
      linkLabel: "AppStore",
      url: "/assets/images/footer-images/app-store-apple.svg",
    },
    {
      linkLabel: "GooglePlay",
      url: "/assets/images/footer-images/google-play-badge.svg",
    },
    {
      linkLabel: "AppGalery",
      url: "/assets/images/footer-images/huawei-store-badge.svg",
    },
  ];

  return (
    <div className="footer_container">
      <div className="footer_division_container">
        <div className="footer_division">
          <h3>Serviciul clienți</h3>
          <p>Luni - Duminică: 08:00 - 19:00 *cu excepția sărbătorilor legale</p>
          <button className="footer_button">Contact</button>
        </div>
        <div className="footer_division">
          <h3>Green-bite.ro</h3>
          <ul className="footer_link_list">
            {footerLinks.map((item) => (
              <li key={item.url} className="footer_links">
                <a href={item.url}>{item.linkLabel}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_division">
          {" "}
          <h3>Informații</h3>
          <ul className="footer_link_list">
            {footerImages.map((item) => (
              <li key={item.url} className="footer_links">
                <a href={item.url}>{item.linkLabel}</a>
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
          {footerImages.map((img) => (
            <img key={img.linkLabel} src={img.url} alt={img.linkLabel} />
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Footer;
