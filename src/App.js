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
import AdminPage from "./components/AdminPage";
import AdminProfile from "./pages/admin-routes/AdminProfile";
import TransferMoney from "./components/TransferMoney";
import AdminDashboard from "./components/AdminDashboard";
import WithdrawMoney from "./components/WithdrawMoney";
function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Base />} />
          <Route path="/home" element={<Base />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup-customer" element={<SignupFormForCustomer />} />
          <Route path="/signup-admin" element={<SignupFormForAdmin />} />

          {/* Customer specific routes  */}
          <Route
            path="/customer"
            element={<PrivateRoute allowedRoles={["ROLE_CUSTOMER"]} />}
          >
            <Route path="customer-profile" element={<ProfileInfo />} />
            <Route path="edit-profile" element={<EditCustomerProfile />} />
            <Route path="transactions" element={<TransactionsDetails />} />
            <Route path="dashboard" element={<CustomerDashBoard />} />
          </Route>

          {/* Admin specifing routes  */}
          <Route
            path="/admin"
            element={<PrivateRoute allowedRoles={["ROLE_ADMIN"]} />}
          >
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="edit-profile" element={<EditCustomerProfile />} />
            <Route path="transfer-money" element={<TransferMoney />} />
            <Route path="withdraw-money" element={<WithdrawMoney />} />

            <Route path="" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
