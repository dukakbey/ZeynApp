import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

function SRouter() {
  return (
    <Router>
      <div>
        <Routes>         
          <Route index element={<Home />} />
          <Route path="photos" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default SRouter;
