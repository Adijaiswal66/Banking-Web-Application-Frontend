import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Base from "./components/Base";
import EditCustomerProfile from "./components/EditCustomerProfile";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import SignupFormForAdmin from "./components/SignupFormForAdmin";
import SignupFormForCustomer from "./components/SignupFormForCustomer";
import TransactionsDetails from "./components/TransactionsDetails";
import NoteState from "./contextAPI/noteState";
import CustomerDashBoard from "./pages/customer-routes/CustomerDashBoard";
import ProfileInfo from "./pages/customer-routes/ProfileInfo";
function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/home" element={<Base />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup-customer" element={<SignupFormForCustomer />} />
          <Route path="/signup-admin" element={<SignupFormForAdmin />} />
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
