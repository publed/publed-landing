import { ReactNode } from "react";
import { Navbar } from ".";
import styles from "../styles";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div
        className={`bg-secondary-blue-60 backdrop-blur-[6px] ${styles.paddingX} ${styles.flexCenter} w-full`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart} flex-col`}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
