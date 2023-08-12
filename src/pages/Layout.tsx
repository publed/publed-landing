import { ReactNode } from "react";
import styles from "../styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div
        className={`bg-secondary-blue-60 backdrop-blur-[6px] ${styles.paddingX} flex justify-center items-center absolute w-full`}
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
