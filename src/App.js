import React, {useState, useEffect} from "react";
import Homepage from "./components/homepage/Homepage";
import EventsPage from "./components/events/EventsPage";
import Login from "./components/Login";
import ProfilePage from "./components/Profilepage/Profilepage";
import { BrowserRouter as Router, Routes, Route , useNavigate} from "react-router-dom";
function App() {

  const [tokenExist, setTokenExist] = useState();

  function checkToken() {
    if (localStorage.getItem('token')) {
      // Token exists, do something with it
      setTokenExist(true);
      const token = localStorage.getItem('token');
      console.log('Token exists:', token);

      // You can use the token for authentication or perform other actions here
    } else {
      // Token does not exist in localStorage
      setTokenExist(false);
    }

  }
  useEffect(() => {
    checkToken();
  })
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {tokenExist &&<>
          <Route path="/home" element={<Homepage />} />
          <Route path="/events" element={<EventsPage />} />
          {/* <Route path="/login" element={<EventsPage />} /> */}
            <Route path="/profile" element={<ProfilePage />} /></>}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
