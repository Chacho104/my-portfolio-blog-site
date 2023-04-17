import Image from "next/image";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineLine } from "react-icons/ai";
import classes from "./project-item.module.css";
import { Fragment } from "react";

function ProjectItem(props) {
  const { image, title, type, description, stack, github, website, layout } =
    props.project;

  if (layout === "text-first") {
    return (
      <Fragment>
        <li className={classes.project}>
          <div className={classes.text}>
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
          <div className={classes.image}>
            <Link href={website} target="_blank">
              <Image src={"/" + image} alt={title} width={500} height={230} />
            </Link>
          </div>
        </li>
        <div className="line-break">
          <AiOutlineLine />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <li className={classes.project}>
          <div className={classes.image}>
            <Link href={website} target="_blank">
              <Image src={"/" + image} alt={title} width={500} height={230} />
            </Link>
          </div>
          <div className={classes.text}>
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
        <div className="line-break">
          <AiOutlineLine />
        </div>
      </Fragment>
    );
  }
}

export default ProjectItem;
