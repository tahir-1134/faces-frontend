import Homepage from "./components/homepage/Homepage";
import EventsPage from "./components/events/EventsPage";
import Login from "./components/Login";
import ProfilePage from "./components/Profilepage/Profilepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<EventsPage />} />
          {/* <Route path="/login" element={<EventsPage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
