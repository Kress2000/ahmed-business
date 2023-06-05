import React from "react";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const navLinkRouters = [
    {
      name: "./images/facebook.svg",
      href: "https://www.facebook.com/profile.php?id=100089737302997",
      target: "_blank"
    },
    {
      name: "./images/instagram.svg",
      href: "https://www.instagram.com/ahmadibusiness/",
      target: "_blank"
    }
  ];
  return (
    <div id={styles.navbar}>
      <div className="nav">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" className="logoimg" />
        </div>
          <div className="nav_link">
            {navLinkRouters.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="aLink"
                target={link.target}
              >
                <img src={link.name} alt="Media logo" className="logoImg"/>
              </a>
            ))}
          </div>
        {/* <img src="/images/humbaga.png" alt="Humbaga btn" className="humbaga" /> */}
      </div>
    </div>
  );
}
