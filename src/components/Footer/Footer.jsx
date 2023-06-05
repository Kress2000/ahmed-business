import React from "react";
import { useState } from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [active, setActive] = useState(0);
  const navLinkRouters = [
    {
      name: "Impressum",
      href: "https://all-inkl.com/datenschutzinformationen/",
      target: "_blank",
    },
  ];
  return (
    <div id={styles.footer}>
      <div className="nav_link">
        {navLinkRouters.map((link, i) => (
          <a
            href={link.href}
            key={i}
            className={i === active ? "aLink active" : "aLink"}
            onClick={() => setActive(i)}
            target={link.target}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
