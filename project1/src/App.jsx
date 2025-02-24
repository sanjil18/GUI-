
import SignUp from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import BookSeat  from './pages/BookSeat.jsx';
import Profile  from './pages/Profile.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/book-seat" element={<BookSeat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
