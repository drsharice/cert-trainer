// ✅ NEW
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DP900 from "./pages/DP900";
import AI102 from "./pages/AI102";
import GCPMLE from "./pages/GCPMLE";
import DP9002 from "./pages/DP900.tsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* padding to offset navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dp900" element={<DP900 />} />
          <Route path="/ai102" element={<AI102 />} />
          <Route path="/gcp" element={<GCPMLE />} />
          <Route path="/dp9002" element={<DP9002 />} />
        </Routes>
      </div>
    </Router>
  );
}
