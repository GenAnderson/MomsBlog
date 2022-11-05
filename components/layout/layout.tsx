import React, { Fragment } from "react";
import NavigationBar from "./navigationBar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Fragment>
      <NavigationBar />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
