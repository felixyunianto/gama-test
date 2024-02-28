import React, { useEffect, useState } from "react";
import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import styles from "./index.module.scss";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(true);
  const [navBg, setNavBg] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNavBackground = () => {
    setNavBg(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);

  return (
    <div className={cn(styles.navbar)}>
      <div
        className={cn(
          styles.bg_nav,
          (navBg || location?.pathname !== "/" && location?.pathname !== "/contact-us" ) && styles.active
        )}
      />
      <div
        className={cn(
          styles.navbar_container,
          (navBg || location?.pathname !== "/" && location?.pathname !== "/contact-us" ) && styles.with_bg
        )}
      >
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={cn(styles.menu_links, isOpen && styles.active)}>
          <NavLink to={"/"} className={cn(styles.menu_items, styles.active)}>
            Beranda
          </NavLink>
          <NavLink to={"/about"} className={styles.menu_items}>
            Tentang
          </NavLink>
          <NavLink to={"/service"} className={styles.menu_items}>
            Layanan
          </NavLink>
          <NavLink to={"/client"} className={styles.menu_items}>
            Klien
          </NavLink>
          <NavLink to={"/article"} className={styles.menu_items}>
            Artikel
          </NavLink>
          <NavLink to={"/contact-us"} className={styles.menu_items}>
            Kontak Kami
          </NavLink>
        </div>

        <div
          className={cn(styles.burger_menu, isOpen && styles.active)}
          onClick={toggleMenu}
        >
          <div className={styles.burger_bar} />
          <div className={styles.burger_bar} />
          <div className={styles.burger_bar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
