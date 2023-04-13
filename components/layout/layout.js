const { Fragment } = require("react");
import MainNav from "./main-nav";
import Footer from "./footer";

function Layout(props) {
  return (
    <Fragment>
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
