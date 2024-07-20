import { myAxios } from "./Helper";

export const signUp = (user) => {
  return myAxios
    .post("/home/registerCustomer",user)
    .then((response) => response.data);
};
