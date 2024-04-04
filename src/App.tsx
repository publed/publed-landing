import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/ScrollToTop";
import UseScrollToTop from "./hooks/useScrollToTop";
import Publed from "./pages/Publed";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <Router>
        <HelmetProvider>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoMatch />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:fileName" element={<BlogPostWrapper />} />
            </Routes>
          </Layout>
        </HelmetProvider>
      </Router>
      <UseScrollToTop />
    </>
  );
}

export default App;

const BlogPostWrapper = () => {
  const { fileName } = useParams();
  return <BlogPost fileName={fileName} />;
};
