import React from "react";

import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>برنامه نویسی پیشرفته</h4>
            <ul>
              <li>مجوز گواهینامه ها</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>درباره ما</li>
            </ul>
          </div>
          <div className="col">
            <h4>رهنما</h4>
            <ul>
              <li>تضمین اصالت کالا</li>
              <li>شرایط عودت کالا</li>
              <li>نحوه ارسال کالا</li>
              <li>راهنمای خرید</li>
              <li>تخفیف ها</li>
            </ul>
          </div>
          <div className="col">
            <h4>برنامه نویسی پیشرفته</h4>
            <ul>
              <li>مجوز گواهینامه ها</li>
              <li>قوانین و مقررات</li>
              <li>حریم خصوصی</li>
              <li>درباره ما</li>
            </ul>
          </div>
          <div className={`col ${styles.socials}`}>
            <h4>با ما در ارتباط باشید</h4>
            <ul>
              <li>
                <FaInstagram fontSize="30px" />
              </li>
              <li>
                <FaXTwitter fontSize="30px" />
              </li>
              <li>
                <FaTelegram fontSize="30px" />
              </li>
              <li>
                <FaFacebook fontSize="30px" />
              </li>
              <li>
                <FaLinkedin fontSize="30px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
