import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <ul>
          <li>
            <FiMenu size="20px" />
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/articles">مقالات</Link>
          </li>
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact">تماس با ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
