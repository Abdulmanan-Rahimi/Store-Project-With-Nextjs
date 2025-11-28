import React from "react";
import styles from "./MainMenu.module.css";
import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";

const MainMenu = () => {
  return (
    <div className={styles.menu}>
      <div className="container">
        <ul>
          <li>
            <Link href="/products/laptops">لپ تاپ</Link>
            <RxCaretDown />
            <div className="subMenu">
              <div className="container">
                <li>
                  <Link href='/products/laptops/asus'>asus</Link>
                </li>
              </div>
            </div>
          </li>
          <li>
            <Link href="/products/mobiles">موبایل</Link>
            <RxCaretDown />
          </li>
          <li>
            <Link href="/products/tablets">تبلت</Link>
            <RxCaretDown />
          </li>
          <li>
            <Link href="/products/cameras">دوربین</Link>
            <RxCaretDown />
          </li>
          <li>
            <Link href="/products/laptops">کنسول و بازی</Link>
            <RxCaretDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
