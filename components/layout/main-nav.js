import Link from "next/link";
import classes from "./main-nav.module.css";
import Logo from "./logo";

function MainNav() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/posts">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
