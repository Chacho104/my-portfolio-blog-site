import { useRouter } from "next/router";
import classes from "./logo.module.css";

function Logo() {
  const router = useRouter();
  return (
    <div className={`${classes.logo} ${router.pathname === "/" ? classes.active : ""}`}>
      <span>.Ch</span>
    </div>
  );
}

export default Logo;
