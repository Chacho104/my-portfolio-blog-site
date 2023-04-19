import Image from "next/image";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineLine } from "react-icons/ai";
import classes from "./project-item.module.css";
import { Fragment, useRef } from "react";
import { useInView } from "framer-motion";

function ProjectItem(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });

  const { image, title, type, description, stack, github, website, layout } =
    props.project;

  if (layout === "text-first") {
    return (
      <Fragment>
        <li className={classes.project} ref={ref}>
          <div className={`${classes.text} ${isInView ? classes.inview : ""}`}>
            <div className={classes.content}>
              <h3>{title}</h3>
              <span>{type}</span>
              <p>{description}</p>
              <span>{stack}</span>
            </div>
            <div className={classes.links}>
              <Link href={github} target="_blank">
                <GrGithub />
              </Link>
              <Link href={website} target="_blank">
                <HiOutlineExternalLink />
              </Link>
            </div>
          </div>
          <div className={`${classes.image} ${isInView ? classes.inview : ""}`}>
            <Link href={website} target="_blank">
              <Image src={"/" + image} alt={title} width={500} height={230} />
            </Link>
          </div>
        </li>
        <div className={`line-break ${isInView ? "inview" : ""}`}>
          <AiOutlineLine />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <li className={classes.project} ref={ref}>
          <div className={`${classes.image1} ${isInView ? classes.inview : ""}`}>
            <Link href={website} target="_blank">
              <Image src={"/" + image} alt={title} width={500} height={230} />
            </Link>
          </div>
          <div className={`${classes.text1} ${isInView ? classes.inview : ""}`}>
            <div className={classes.content}>
              <h3>{title}</h3>
              <span>{type}</span>
              <p>{description}</p>
              <span>{stack}</span>
            </div>
            <div className={classes.links}>
              <Link href={github} target="_blank">
                <GrGithub />
              </Link>
              <Link href={website} target="_blank">
                <HiOutlineExternalLink />
              </Link>
            </div>
          </div>
        </li>
        <div className={`line-break1 ${isInView ? "inview" : ""}`}>
          <AiOutlineLine />
        </div>
      </Fragment>
    );
  }
}

export default ProjectItem;
