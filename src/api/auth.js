import axiosInstance from "./axios";

export const loginRequest = ({ email, password }) =>
  axiosInstance.post("login", { email, password });

export const registerRequest = ({
  name,
  email,
  password,
  password_confirmation,
}) => {
  return axiosInstance.post("register", {
    name,
    email,
    password,
    password_confirmation,
  });
};
