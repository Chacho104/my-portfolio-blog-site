import Image from "next/image";
import classes from "./hero.module.css";
import AnimatedLetters from "../ui/animated-letters";
import { useState } from "react";

function Hero() {
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
    "l",
    "i",
    "v",
    "e",
    " ",
    "a",
    "n",
    "d",
    " ",
    "b",
    "r",
    "e",
    "a",
    "t",
    "h",
    "e",
    " ",
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "m",
    "e",
    "n",
    "t",
    " ",
    "|",
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
    "j",
    ".",
    "j",
    "s",
    ",",
    " ",
    "C",
    "S",
    "S",
    "3",
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
    <section className={classes.hero}>
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
