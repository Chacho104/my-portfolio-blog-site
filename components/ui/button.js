import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  if (props.link && props.variant === "btn") {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  } else if (props.link && props.variant === "btn1") {
    return (
      <Link href={props.link} className={classes.btn1}>
        {props.children}
      </Link>
    );
  } else if (!props.link && props.variant === "btn") {
    return <button className={classes.btn}>{props.children}</button>;
  } else {
    return <button className={classes.btn1}>{props.children}</button>;
  }
}

export default Button;
