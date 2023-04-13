import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
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
        <h1>Hi, I'm Churchil</h1>
        <p>
          I live and breathe front-end software development | JavaScript, React.js,
          Next.js, & CSS3.
        </p>
      </div>
    </section>
  );
}

export default Hero;
