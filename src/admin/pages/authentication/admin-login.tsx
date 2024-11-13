import { useState } from "react";
import Input from "../../../shared/components/input-pattern/input";
import { useMutation } from "@tanstack/react-query";
import { signInAPI } from "../../services/api/auth.api";
import { setCookie } from "../../../shared/utils/cookie";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const { mutate } = useMutation({
    mutationFn: async () => {
      return await signInAPI(loginData);
    },
    onError: () => {
      alert("Oops something went wrong");
    },
    onSuccess: (data: { accessToken: string }) => {
      console.log(data);
      setCookie("at-adm", data?.accessToken as string);
      navigate("/admin/dashboard");
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };
  return (
    <form className="flex w-full h-screen" onSubmit={handleSubmit}>
      <div className="w-1/2 bg-white mx-auto p-20 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center text-[#585858] mb-6">
          Log in
        </h2>
        <div className="space-y-5">
          <div>
            <Input
              name={"email"}
              title={"Email"}
              placeholder={"Enter your email"}
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
            />
          </div>
          <div>
            <Input
              name={"password"}
              title={"Password"}
              type="password"
              placeholder={"Enter your password"}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
            />
          </div>

          <button className="w-full py-3 bg-blue-500 text-white rounded  focus:outline-none">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminLogin;
