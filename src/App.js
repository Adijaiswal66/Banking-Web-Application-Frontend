import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Base from "./components/Base";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import SignupForm from "./components/SignupForm";
import TransactionsDetails from "./components/TransactionsDetails";
import CustomerDashBoard from "./pages/customer-routes/CustomerDashBoard";
import ProfileInfo from "./pages/customer-routes/ProfileInfo";
import NoteState from "./contextAPI/noteState";
import EditCustomerProfile from "./components/EditCustomerProfile";
function App() {
  return (
    <NoteState>
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
            <Route path="transactions" element={<TransactionsDetails />} />
            <Route path="edit-profile" element={<EditCustomerProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
