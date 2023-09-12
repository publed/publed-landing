import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/ScrollToTop";
import UseScrollToTop from "./hooks/useScrollToTop";
import Publed from "./pages/Publed";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/publ3d" element={<Publed />} /> */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Layout>
      </Router>
      <UseScrollToTop />
    </>
  );
}

export default App;
