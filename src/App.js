import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from './context/globalContext'
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import TheatersPage from "./pages/theaters";
import MoviesPage from "./pages/movies";
import ProfilePage from "./pages/profile";
import MovieShow from "./components/MovieShow/MovieShow";
import ShowsPage from "./pages/shows";
import BookingsPage from "./pages/bookings";

function App() {
  return (
    <GlobalProvider value={null}>
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/theaters" element={<TheatersPage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:id" element={<MovieShow/>}></Route>
          <Route path="/shows" element={<ShowsPage/>}></Route>
          <Route path="/bookings" element={<BookingsPage/>}></Route>
          <Route
            path="https://bookyourshow-backend.herokuapp.com/users/profile/:id"
            element={<ProfilePage />}
          ></Route>
          <Route path="/" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
