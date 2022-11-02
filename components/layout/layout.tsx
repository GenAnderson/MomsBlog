import {
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import NavigationBar from "./navigationBar";

function Layout(
  props:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
) {
  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
