import "./App.css";
import Navbar from "./components/Navbar";
import CustomerDetails from "./components/CustomerDetails";
import CustomerList from "./components/CustomerList";
import LoginForm from "./components/LoginForm";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./components/Base";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import ProfileInfo from "./pages/customer-routes/ProfileInfo";
import CustomerDashBoard from "./pages/customer-routes/CustomerDashBoard";
import Transactions from "./components/Transactions";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/home" element={<Base />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/customer" element={<PrivateRoute />}>
          <Route path="dashboard" element={<CustomerDashBoard />} />
          <Route path="profile" element={<ProfileInfo />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
