import OTPInput from "react-otp-input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import LoadingIcon from "../../assets/svg/loading.svg";
import { ErrorWithResponse } from "../../types/error";
import { verifySignUp } from "../../services/api/auth.api";
import { setCookie } from "../../../shared/utils/cookie";
const FormVerify: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string>();
  const { mutate, isPending } = useMutation<{ accessToken: string }>({
    mutationFn: async () => {
      return await verifySignUp({
        otp,
        email,
      });
    },
    onSuccess: (data: { accessToken: string }) => {
      setCookie("at-itc", data?.accessToken as string);
      navigate("/", {
        state: { email: email },
      });
    },
    onError: (e: unknown) => {
      const error = e as ErrorWithResponse;
      setError(error?.response?.data?.message);
    },
  });
  const handleChangeOTP = (newOtp: string) => {
    setOtp(newOtp);
    if (newOtp.length >= 6) {
      mutate();
    }
  };
  return (
    <div className="max-w-[500px] w-full mx-auto mt-[120px] text-center">
      <div className="rounded-lg shadow-lg">
        <div className="p-20">
          <h1 className="font-bold text-[26px] mt-10">Verify your account</h1>
          <p className="font-medium mt-3">Please enter the code we sent to</p>
          <h2 className="font-medium">
            <span className="text-[#0094df] font-semibold">{email}</span>
          </h2>
          <div className="mt-10 mx-auto w-fit">
            <OTPInput
              value={otp}
              onChange={handleChangeOTP}
              numInputs={6}
              inputType="tel"
              renderInput={({ style, className = "", ...props }) => (
                <input
                  className={`text-center ${style} font-semibold text-2xl border max-sm:w-8 max-sm:h-8 w-10 h-10 mx-2 focus:outline-blue-default bg-gray-50 rounded-md ${className} ${
                    error ? "border-red-500" : ""
                  } ${isPending ? "cursor-not-allowed bg-gray-200" : ""}`}
                  disabled={isPending}
                  {...props}
                />
              )}
            />
            {isPending && (
              <img
                className={`animate-spin absolute -top-[35%] text-center right-[50%] left-[50%]`}
                src={LoadingIcon}
                alt="Loading"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormVerify;
