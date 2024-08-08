import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Principal } from "./pages/Principal";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
