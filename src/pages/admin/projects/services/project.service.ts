import { AxiosRequestConfig } from 'axios';
import { useAxiosGet, useAxiosPost } from 'hooks/useAxios';

const PROJECT_API_BASE_PATH = '/project';

//  ** Get Logged User Details **
export const useGetProjectAPI = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosGet();

  const getProjectAPI = async (
    data?: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${PROJECT_API_BASE_PATH}/`);
  };

  return { getProjectAPI, isLoading, isError, isSuccess };
};
