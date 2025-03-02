import Link from "next/link";
import logo from "@/assets/logo.png";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logo.src} alt="A plate with food on it"/>
        Hello Next JS
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}