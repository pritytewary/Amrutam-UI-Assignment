import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/book" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
