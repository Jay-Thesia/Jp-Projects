import Footer from "components/shared/footer";
import Header from "components/shared/header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations";
import { LoginFormFields } from "../types";
import Input from "components/comman/input";
import { Link, useNavigate } from "react-router-dom";
import Button from "components/comman/button";
import { useDispatch } from "react-redux";
import { useLoginPostAPI } from "../services/auth.service";
import { setAccessToken, setCredentials } from "redux-toolkit/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });


  const { loginPostAPI, isLoading: loader } = useLoginPostAPI();
  const onSubmit = handleSubmit(async (value) => {
    try {
      const formData = new FormData();

      formData.append("email", value.email);
      formData.append("password", value.password);
    
  
      const { data, error } = await loginPostAPI(formData);
      
      console.log('data :>> ', data);
      if (!error && data?.access_token) {
        console.log('data.access_token :>> ', data.access_token);
        localStorage.setItem("access_token", data?.access_token);
        dispatch(setAccessToken({ token: data?.token, isSuperAdmin: true }));
        dispatch(
          setCredentials({
            token:data.access_token,
            isSuperAdmin: true
          })
        );

        return navigate("/");
      }
    } catch (error) {
      console.log({ error });
      throw error;
    }
  });

  return (<><div className=""><Header /></div>

    <div className="mt-12 container">

      <div className=" bg-white rounded-2xl py-16 px-12 shadow-auth-box z-[1]">
        <div className=" mb-12 ">
          <h2 className="text-4xl font-medium text-dark">Welcome</h2>
          <p className="text-lg text-grey2 font-light">
            Please enter your login details below.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-10 ">
            <Input<LoginFormFields>
              variant={false}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              register={register}
              error={errors.email}
            />
            <div className="flex flex-col gap-2">
              <Input<LoginFormFields>
                variant={false}
                type="password"
                id="password"
                name="password"
                register={register}
                error={errors.password}
                placeholder="Password"
              />
              {/* <Link
                    to="/forgot-password"
                    className="text-base text-ocean ml-auto hover:opacity-50 transition-all"
                  >
                    Forgot password?
                  </Link> */}
            </div>

            <Button
              className="w-full"
              smallBtn={false}
              type="submit"
              isLoading={loader}
              variant="darkFill"
            >
              Login
            </Button>
          </div>
        </form>
      </div>


    </div>

    <div className=""><Footer /></div></>)
};

export default Login;
