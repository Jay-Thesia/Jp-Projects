import { AxiosRequestConfig } from 'axios';
import { useAxiosGet, useAxiosPatch, useAxiosPost } from 'hooks/useAxios';

const PROJECT_API_BASE_PATH = '/projects';

//  ** Get Logged User Details **
export const useGetSingleProjectAPI = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosGet();

  const getSingleProjectAPI = async (
    data?: object,
    config: AxiosRequestConfig<object> = {},
    id?: string
  ) => {
    return callApi(`${PROJECT_API_BASE_PATH}/${id}`);
  };

  return { getSingleProjectAPI, isLoading, isError, isSuccess };
};
