import { ReactNode } from "react";
import styles from "../styles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import backgroundImage from "../assets/back_bg_white_triangle_grey.png";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith("/blog/");
  const isBlogListing = location.pathname === "/blog";
  let containerClass = "";
  if (isBlogPost && !isBlogListing) {
    containerClass = styles.flexStart;
  }

  const layoutStyle = isBlogPost
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div style={layoutStyle} className="flex flex-col min-w-fit">
      <>
        <div
          className={`bg-secondary-blue-60 backdrop-blur-[6px] ${styles.paddingX} flex justify-center items-center fixed w-full z-10`}
        >
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`flex flex-col ${containerClass}`}>{children}</div>
        <Footer />
      </>
    </div>
  );
};

export default Layout;
