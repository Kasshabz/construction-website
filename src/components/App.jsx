import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Footer from "./Footer";
// import TopBar from "./TopBar";

function App() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      {/* Wrap the Routes in a div that applies a full black background */}
      <div className="bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
