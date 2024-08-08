import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Principal } from "./pages/Principal";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
