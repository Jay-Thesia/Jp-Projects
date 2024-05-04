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
    return callApi(`${AUTH_API_BASE_PATH}/get-user`, data, config);
  };

  return { getLoggedInUserAPI, isLoading, isError, isSuccess };
};
