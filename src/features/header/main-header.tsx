import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

import classes from "./main-header.module.css";
import MainHeaderBackground from "@/features/header/main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link
          className={classes.logo}
          href="/"
        >
          {/* Image component를 사용하면 이미지를 최적화 할 수 있다. */}
          <Image
            src={logo}
            alt="A plate with food on it"
            priority
          />
          Hello Next JS
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
