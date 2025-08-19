import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="content" id="content">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/weather" element ={<Weather />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
