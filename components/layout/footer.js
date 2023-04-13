import Link from "next/link";
import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr";
import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <span>&copy; c&CS 2023</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/churchilowino/">
              <GrLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Chacho104">
              <GrGithub />
            </Link>
          </li>
          <li>
            <Link href="/">
              <GrTwitter />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
