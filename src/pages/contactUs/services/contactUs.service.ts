import { AxiosRequestConfig } from 'axios';
import { useAxiosPost } from 'hooks/useAxios';

const CONTACT_API_BASE_PATH = '/contact';
export const usePostContactInfo = () => {
  // ** custom Hooks **
  const [callApi, { isLoading, isError, isSuccess }] = useAxiosPost();

  const postContactInfoAPI = async (
    data: object,
    config: AxiosRequestConfig<object> = {}
  ) => {
    return callApi(`${CONTACT_API_BASE_PATH}/submitForm`, data, config);
  };

  return { postContactInfoAPI, isLoading, isError, isSuccess };
};
