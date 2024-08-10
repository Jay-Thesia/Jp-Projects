import { AxiosRequestConfig } from 'axios';
import { useAxiosGet, useAxiosPatch, useAxiosPost } from 'hooks/useAxios';

const PROJECT_API_BASE_PATH = '/projects';

//  ** Get Logged User Details **
export const useGetProjectAPI = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosGet();

  const getProjectAPI = async (
    data?: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${PROJECT_API_BASE_PATH}/getAll`);
  };

  return { getProjectAPI, isLoading, isError, isSuccess };
};

//  ** Post create Logged User Project **
export const useCreateProjectAPI = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();

  const createProjectAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${PROJECT_API_BASE_PATH}/add`, data, config);
  };

  return { createProjectAPI, isLoading, isError, isSuccess };
};

//  ** patch edit Logged User Details **
export const useEditProjectAPI = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPatch();

  const editProjectAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {},
    id: string
  ) => {
    return callApi(`${PROJECT_API_BASE_PATH}/add/${id}`, data, config);
  };

  return { editProjectAPI, isLoading, isError, isSuccess };
};
