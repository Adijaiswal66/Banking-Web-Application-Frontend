import { myAxios } from "./Helper";

export const signUpCustomer = async (user) => {
  try {
    const response = await myAxios.post("/home/registerCustomer", user);
    // console.log("response inside user-service: ", response);

    const data = response.data;
    // console.log("data inside user-service: ", data);

    return data; // Return the data from the response
  } catch (error) {
    console.log(error);
  }
};

export const signUpAdmin = async (user) => {
  try {
    const response = await myAxios.post("/home/registerAdmin", user);
    // console.log("response inside user-service: ", response);

    const data = response.data;
    // console.log("data inside user-service: ", data);

    return data; // Return the data from the response
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (loginDetail) => {
  try {
    const response = await myAxios.post("/auth/login", loginDetail);
    // console.log("response inside user-service: ", response);

    const data = response.data;
    // console.log("data inside user-service: ", data);

    return data; // Return the data from the response
  } catch (error) {
    console.log(error);
  }
};
