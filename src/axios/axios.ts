import axios, { InternalAxiosRequestConfig } from "axios";
import { REACT_APP_API_URL } from "../configs/env";
import { Store } from "@reduxjs/toolkit";
// import { setLogoutData } from "redux/slices/authSlice";

export const Axios = axios.create({ baseURL: REACT_APP_API_URL });

export const setupAxios = (store: Store) => {
  //   Axios.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  //     const loginToken = localStorage.getItem("access_token");
  //     if (req.headers !== undefined) {
  //       if (typeof req?.data === "object") {
  //         req.headers["Content-Type"] = "application/json";
  //       } else {
  //         req.headers["Content-Type"] = "multipart/form-data";
  //       }
  //     }
  //     if (req.headers && loginToken !== null) {
  //       req.headers["Authorization"] = `Bearer ${loginToken}`;
  //     }
  //     return req;
  //   });
  //   Axios.interceptors.response.use(
  //     (res) => {
  //       const { toast, message, responseType } = res.data;
  //       return res?.data;
  //     },
  //     (err) => {
  //       if (err?.response?.status === 401) {
  //         store.dispatch(setLogoutData());
  //       }
  //       if (
  //         err?.response?.status === 400 ||
  //         err?.response?.status === 500 ||
  //         err?.response?.status === 401 ||
  //         err?.response?.status === 403 ||
  //         err?.response?.status === 503
  //       ) {
  //         const { toast, message, responseType } = err?.response?.data;
  //         // ShowToastMessage({
  //         //   title: message ?? "Something went wrong",
  //         //   type: "error",
  //         // });
  //         throw err?.response?.data;
  //       }
  //     }
  //   );
};

export default axios;
