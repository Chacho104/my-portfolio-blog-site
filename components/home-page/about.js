import { MdDevicesOther } from "react-icons/md";
import { SlAnchor } from "react-icons/sl";
import { AiOutlineLine } from "react-icons/ai";
import classes from "./about.module.css";
import Link from "next/link";
import { TbWriting } from "react-icons/tb";
import { useRef } from "react";
import { useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <section ref={ref}>
      <div className="topsvg">
        <SlAnchor />
      </div>
      <div className={classes.description}>
        <div className={classes.item}>
          <div className={`${classes.text} ${isInView ? classes.inview : ""}`}>
            <h3>The developer</h3>
            <p>
              Hello, my name is Churchil Owino, and I am a{" "}
              <strong className={classes.highlight}>
                front-end software developer and blogger
              </strong>{" "}
              based in Nairobi, Kenya.
            </p>
            <p>
              I specialize in turning ideas and designs into picture perfect,
              fully responsive UI implementations using{" "}
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
          <div
            className={`${classes["text-svg"]} ${
              isInView ? classes.inview : ""
            }`}
          >
            <MdDevicesOther />
          </div>
        </div>
        <div className={`line-break ${isInView ? "inview" : ""}`}>
          <AiOutlineLine />
        </div>
        <div className={classes.item}>
          <div
            className={`${classes["text-svg1"]} ${
              isInView ? classes.inview : ""
            }`}
          >
            <TbWriting />
          </div>
          <div className={`${classes.text1} ${isInView ? classes.inview : ""}`}>
            <h3>The blogger</h3>
            <p>
              Often, my articles are a documentation of the problems I encounter
              in my line of work and their solutions. I have gained a lot from
              such documentations elsewhere on the web, and I believe it is only
              fair that others get to benefit as well from my development
              adventures.
            </p>
            <p>
              I mostly blog about{" "}
              <strong className={classes.highlight}>
                JavaScript, React.js, and Next.js.
              </strong>
            </p>
            <p>
              Check out all my <Link href="/posts">blogs</Link>
            </p>
          </div>
        </div>
        <div className={`line-break1 ${isInView ? "inview" : ""}`}>
          <AiOutlineLine />
        </div>
      </div>
      <div className="botsvg">
        <SlAnchor />
      </div>
    </section>
  );
}

export default About;
