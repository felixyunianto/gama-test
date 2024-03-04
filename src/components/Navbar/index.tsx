import React, { useEffect, useState } from "react";
import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import styles from "./index.module.scss";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNavBackground = () => {
    setNavBg(window.scrollY > 80);
  };

  const activeNavbar = (path: string) => {
    return location.pathname === path;
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
          (navBg ||
            (location?.pathname !== "/" &&
              location?.pathname !== "/contact-us")) &&
            styles.active
        )}
      />
      <div
        className={cn(
          styles.navbar_container,
          (navBg ||
            (location?.pathname !== "/" &&
              location?.pathname !== "/contact-us")) &&
            styles.with_bg
        )}
      >
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={cn(styles.menu_links, isOpen && styles.active)}>
          <NavLink
            onClick={() => setIsOpen(false)}
            to={"/"}
            className={cn(
              styles.menu_items,
              activeNavbar("/") && styles.active
            )}
          >
            Beranda
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to={"/about"}
            className={cn(
              styles.menu_items,
              activeNavbar("/about") && styles.active
            )}
          >
            Tentang
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to={"/service"}
            className={cn(
              styles.menu_items,
              activeNavbar("/service") && styles.active
            )}
          >
            Layanan
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to={"/client"}
            className={cn(
              styles.menu_items,
              activeNavbar("/client") && styles.active
            )}
          >
            Klien
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to={"/article"}
            className={cn(
              styles.menu_items,
              activeNavbar("/article") && styles.active
            )}
          >
            Artikel
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to={"/contact-us"}
            className={cn(styles.menu_items, styles.contact_us)}
          >
            Kontak Kami
          </NavLink>
        </div>

        <div
          className={cn(
            styles.burger_menu,
            location.pathname === "/contact-us" && styles.burger_contact,
            isOpen && styles.active
          )}
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
