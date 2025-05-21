import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Sobre from "./Pages/NossaHistoria"
import Footer from "./Components/Footer";

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const LayoutWithHeader = ({ children }) => (
  <>
    <Header />
   
    <AnimatedPage>{children}</AnimatedPage>

     <Footer />
  </>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayoutWithHeader><Home /></LayoutWithHeader>} />
          <Route path="/sobre" element={<LayoutWithHeader><Sobre /></LayoutWithHeader>} />
      </Routes>
    </AnimatePresence>
  );
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default RoutesApp;