import { getCurrentUserDetail } from "../auth";
import { myAxios } from "./Helper";
import axios from "axios";

export const signUp = (user) => {
  return myAxios
    .post("/home/registerCustomer", user)
    .then((response) => response.data);
};

export const loginUser = (loginDetail) => {
  return myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);
};

