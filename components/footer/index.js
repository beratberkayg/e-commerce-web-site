import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by
      <Link target="_blank" href="https://github.com/beratberkayg">
        Berat Berkay
      </Link>
    </footer>
  );
};

export default Footer;
