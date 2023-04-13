import classes from "./about.module.css";

function About() {
  return (
    <section className={classes.about}>
      <h2>About me</h2>
      <p>
        Hello, my name is Churchil Owino, and I am a front-end software
        developer based in Nairobi, Kenya. Welcome to this unique experience
        where you will hopefully enjoy getting to know me through what I do
        best: code and write.
      </p>
      <article>
        <h3>Design and build</h3>
      </article>
      <article>
        <h3>Share knowledge</h3>
      </article>
    </section>
  );
}

export default About;
