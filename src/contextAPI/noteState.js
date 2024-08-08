import axios from "axios";
import { useEffect, useState } from "react";
import { base_url } from "../services/Helper";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getCurrentUserDetail();
    // console.log(getCurrentUserDetail());
    if (getCurrentUserDetail() !== undefined || !user) {
      getuserbyid();
    }
  }, []);

  const update = () => {
    setTimeout(() => {
      getCurrentUserDetail();
      getuserbyid();
    }, 1000);
  };

  const doLogin = (data, next) => {
    // console.log("data inside doLogin: " + JSON.stringify(data));
    if (data.token && data.user) {
      localStorage.setItem("data", JSON.stringify(data));
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
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      getCurrentUserDetail().token
    }`;
    // console.log(getCurrentUserDetail());
    await axios
      .get(`${base_url}/user/customer/${getCurrentUserDetail().user.userId}`)
      .then((response) => {
        let data = response.data;
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <NoteContext.Provider
      value={{
        doLogin,
        doLogout,
        isLoggedIn,
        getCurrentUserDetail,
        user,
        update,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
