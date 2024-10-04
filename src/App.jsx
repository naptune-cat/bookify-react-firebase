import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { FirebaseProvider } from "./context/firebase";
//pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

//components
import MyNavbar from "./components/Navbar";
import ListingPage from "./pages/List";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Orders from "./pages/Orders";
import Bookify from "./pages/Bookify";

function App() {
  return (
    <FirebaseProvider>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Bookify />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/book/list" element={<ListingPage />} />
          {/* : for dynamic id */}
          <Route path="/book/description/:bookId" element={<Description />} />
          <Route path="/book/orders" element={<Orders />} />
        </Routes>
      </div>
    </FirebaseProvider>
  );
}

export default App;
