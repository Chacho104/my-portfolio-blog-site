import classes from "./items-grid.module.css";

function ItemsGrid(props) {
  return <ul className={classes.grid}>{props.children}</ul>;
}

export default ItemsGrid;
