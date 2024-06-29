import { ReactNode } from "react";
import Topbar from "./Topbar";
import Navcit from "./Navcit";
import Footer from "./Footer";

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <Topbar />
      <Navcit />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
