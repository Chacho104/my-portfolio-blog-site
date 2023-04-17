import { MdDevicesOther } from "react-icons/md";
import { SlAnchor } from "react-icons/sl";
import { AiOutlineLine } from "react-icons/ai";
import classes from "./about.module.css";
import Link from "next/link";
import { TbWriting } from "react-icons/tb";

function About() {
  return (
    <section>
      <div className="topsvg">
        <SlAnchor />
      </div>
      <div className={classes.description}>
        <div className={classes.item}>
          <div className={classes.text}>
            <h3>The developer</h3>
            <p>
              Hello, my name is Churchil Owino, and I am a{" "}
              <strong className={classes.highlight}>
                front-end software developer and blogger
              </strong>{" "}
              based in Nairobi, Kenya.
            </p>
            <p>
              As a developer, I specialize in turning ideas and designs into
              picture perfect, fully responsive UI implementations using{" "}
              <strong className={classes.highlight}>
                JavaScript, React.js, Next.js, CSS3, and HTML5.
              </strong>{" "}
              I am huge on details. I will not rest until every tiny detail fits
              just the way you want it!
            </p>
            <p>
              Check out all my <Link href="/projects">projects</Link>
            </p>
          </div>
          <div className={classes["text-svg"]}>
            <MdDevicesOther />
          </div>
        </div>
        <div className="line-break">
          <AiOutlineLine />
        </div>
        <div className={classes.item}>
          <div className={classes["text-svg"]}>
            <TbWriting />
          </div>
          <div className={classes.text}>
            <h3>The blogger</h3>
            <p>
              Writing is how I give back to the society in my small way. As a
              self-taught developer, I appreciate the value of well-crafted
              articles out there that help others learn something new or solve a
              problem.
            </p>
            <p>I mostly blog about JavaScript, React.js, and Next.js.</p>
            <p>
              Check out all my <Link href="/blogs">blogs</Link>
            </p>
          </div>
        </div>
        <div className="line-break">
          <AiOutlineLine />
        </div>
        <div className={classes.actions}>
          <Link href="/contact" className={classes.hello}>
            Say hello
          </Link>
          <button className={classes.resume}>My resume</button>
        </div>
      </div>
      <div className="botsvg">
        <SlAnchor />
      </div>
    </section>
  );
}

export default About;
