import Link from "next/link";
import classes from "./main-nav.module.css";
import Logo from "./logo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 3 || scrollY - lastScrollY < -3)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function MainNav() {
  const router = useRouter();

  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`${classes.header} ${
        scrollDirection === "down" ? classes.down : ""
      }`}
    >
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href="/projects"
              className={router.pathname === "/projects" ? classes.active : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={router.pathname === "/posts" ? classes.active : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={router.pathname === "/contact" ? classes.active : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
