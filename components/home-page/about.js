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
                full-stack software developer and blogger
              </strong>{" "}
              based in Nairobi, Kenya.
            </p>
            <p>
              I specialize in turning ideas and designs into acccessible, fully
              responsive, and picture-perfect UI implementations mainly through{" "}
              <strong className={classes.highlight}>
                JavaScript, TypeScript, React.js, Next.js, CSS3, HTML5, and
                Node.js.
              </strong>{" "}
            </p>
            <p>
              Other tools and technologies that I love using include:{" "}
              <strong className={classes.highlight}>
                Chakra UI, Material UI, Bootstrap, Sass, Tailwind CSS, Redux
                Toolkit, and Recoil.
              </strong>
            </p>
            <p>
              Check out <Link href="/projects">all my projects</Link>
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
              My articles are mostly a documentation of the problems I encounter
              in my line of work and their solutions. I have gained a lot from
              similar articles elsewhere on the web, and it is only fair that I
              return the favor.
            </p>
            <p>
              I mostly blog about{" "}
              <strong className={classes.highlight}>
                JavaScript, React.js, and Next.js.
              </strong>
            </p>
            <p>
              Check out <Link href="/posts">all my blogs</Link>
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
