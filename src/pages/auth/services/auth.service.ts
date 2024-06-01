import { AxiosRequestConfig } from "axios";
import { log } from "console";
import { useAxiosGet, useAxiosPost } from "hooks/useAxios";

const AUTH_API_BASE_PATH = "/authorize";

//  ** Get Logged User Details **
export const useGetLoggedInUserAPI = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();

  const getLoggedInUserAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${AUTH_API_BASE_PATH}/getLoggedIn`,data,config);
  };

  return { getLoggedInUserAPI, isLoading, isError, isSuccess };
};



// ** post **
//  ** Login User **
export const useLoginPostAPI = () => {
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();

  const loginPostAPI = async (
    data: any,
    config: AxiosRequestConfig<object> = {}
  ) => {

    return await callApi(`${AUTH_API_BASE_PATH}/login`, data, config);
  };

  return { loginPostAPI, isLoading, isError, isSuccess };
};

