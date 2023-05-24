import Image from "next/image";
import classes from "./hero.module.css";
import AnimatedLetters from "../ui/animated-letters";
import { useRef, useState } from "react";
import Button from "../ui/button";
import { useInView } from "framer-motion";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [
    "H",
    "i",
    ",",
    " ",
    "I",
    "'",
    "m",
    " ",
    "C",
    "h",
    "u",
    "r",
    "c",
    "h",
    "i",
    "l",
  ];

  const jobArray = [
    "I",
    " ",
    "b",
    "u",
    "i",
    "l",
    "d",
    " ",
    "f",
    "r",
    "o",
    "n",
    "t",
    "-",
    "e",
    "n",
    "d",
    " ",
    "w",
    "e",
    "b",
    " ",
    "a",
    "p",
    "p",
    "l",
    "i",
    "c",
    "a",
    "t",
    "i",
    "o",
    "n",
    "s",
    " ",
    "i",
    "n",
    " ",
    "J",
    "a",
    "v",
    "a",
    "S",
    "c",
    "r",
    "i",
    "p",
    "t",
    ",",
    " ",
    "T",
    "y",
    "p",
    "e",
    "S",
    "c",
    "r",
    "i",
    "p",
    "t",
    ",",
    " ",
    "R",
    "e",
    "a",
    "c",
    "t",
    ".",
    "j",
    "s",
    ",",
    " ",
    "N",
    "e",
    "x",
    "t",
    ".",
    "j",
    "s",
    ",",
    " ",
    "C",
    "S",
    "S",
    "3",
    ",",
    " ",
    "&",
    " ",
    "H",
    "T",
    "M",
    "L",
    "5",
    ".",
  ];

  return (
    <section className={classes.hero} ref={ref}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile-img.jpg"
          alt="A picture of Churchil"
          width={300}
          height={300}
        />
      </div>
      <div className={classes.content}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
        </h1>
        <p>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={31}
          />
        </p>
      </div>
    </section>
  );
}

export default Hero;
