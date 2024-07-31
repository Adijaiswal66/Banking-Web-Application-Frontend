export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data === null || data === "Credentials Invalid !!") {
    return false;
  } else {
    return true;
  }
};

export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return undefined;
  }
};
