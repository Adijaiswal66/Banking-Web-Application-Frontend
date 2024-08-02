import { getCurrentUserDetail } from "../auth";
import { myAxios } from "./Helper";
import axios from "axios";

export const signUp = async (user) => {
  return await myAxios
    .post("/home/registerCustomer", user)
    .then((response) => response.data);
};

export const loginUser = async (loginDetail) => {
  return await myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);
};

// export const updateUser = async (updatedData) => {
//   console.log(getCurrentUserDetail().token);
//   axios.defaults.headers.common["Authorization"] = `Bearer ${
//     getCurrentUserDetail().token
//   }`;
//   return await myAxios
//     .put(`/user/customer/${getCurrentUserDetail().user.userId}`, updatedData)
//     .then((response) => response.data);
// };
