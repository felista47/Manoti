import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';

const App = () => {
  return (
    <>
      {/* Navbar is rendered on all pages */}
      <Navbar />
      
      {/* Define routes for dynamic page rendering */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
      
      {/* Footer is rendered on all pages */}
      <Footer />
    </>
  );
};

export default App;
