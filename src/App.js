import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CustomerDetails from "./components/CustomerDetails";
import CustomerList from "./components/CustomerList";
import LoginForm from "./components/LoginForm";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Base from "./components/Base";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/home" element={<Base />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
