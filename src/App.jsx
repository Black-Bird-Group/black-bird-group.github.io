import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import MapPage from "./components/MapPage";

function App() {
  return (
    <Router>
      <div>
        {/* Full-width navbar with centered and slightly shifted links */}
        <nav className="p-4 bg-gray-900 text-white flex justify-center w-full">
          <div
            className="flex justify-between w-[250px]" // Adjust width to control spacing
            style={{ transform: "translateX(-10px)" }} // Slight shift left
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>

            <Link to="/contact" className="hover:underline">
              Contact
            </Link>

            <Link to="/map" className="hover:underline">
              Map
            </Link>
          </div>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
