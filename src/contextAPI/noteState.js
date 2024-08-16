import axios from "axios";
import { useEffect, useState } from "react";
import { base_url } from "../services/Helper";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const [user, setUser] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const currentUser = getCurrentUserDetail();
    if (currentUser !== undefined || !user) {
      getuserbyid();
      getAllCustomer();
    }
  }, []);

  const update = () => {
    setTimeout(() => {
      getCurrentUserDetail();
      getuserbyid();
      getAllCustomer();
    }, 1000);
  };

  const doLogin = (data, next) => {
    // console.log("data inside doLogin: " + JSON.stringify(data));
    if (data.token && data.user) {
      localStorage.setItem("data", JSON.stringify(data));
      setUser(data.user); // Set user immediately
      next();
    } else {
      console.log("Invalid response");
    }
  };

  const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if (
      data === null ||
      data === "Credentials Invalid !!" ||
      data === undefined
    ) {
      return false;
    } else {
      return true;
    }
  };
  const doLogout = (next) => {
    setUser([]); // Reset user state
    localStorage.removeItem("data");
    next();
  };

  const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return undefined;
    }
  };

  const getuserbyid = async () => {
    if (getCurrentUserDetail() === undefined) {
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;
    // console.log(getCurrentUserDetail());
    await axios
      .get(`${base_url}/user/customer/${getCurrentUserDetail().user.userId}`)
      .then((response) => {
        let data = response.data;
        // console.log("user inside getUSerbyId: " + JSON.stringify(user));
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllCustomer = async () => {
    if (getCurrentUserDetail() === undefined) {
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;

    await axios
      .get(`${base_url}/user/admin/customers`)
      .then((response) => {
        let data = response.data;
        setUserList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isAdmin = user?.roles?.some((role) => role.name === "ROLE_ADMIN");

  const isCustomer = user?.roles?.some((role) => role.name === "ROLE_CUSTOMER");
  // console.log("user in noteState: " + JSON.stringify(user));
  return (
    <NoteContext.Provider
      value={{
        doLogin,
        doLogout,
        isLoggedIn,
        getCurrentUserDetail,
        user,
        update,
        isAdmin,
        isCustomer,
        userList,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
