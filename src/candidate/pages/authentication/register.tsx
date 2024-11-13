import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
// import VisibleIcon from "../../assets/svg/visible_eye.svg";
// import InvisibleIcon from "../../assets/svg/invisible_eye.svg";
import { useMutation } from "@tanstack/react-query";
import Input from "../../../shared/components/input-pattern/input";
import { signUp } from "../../services/api/auth.api";
import { ErrorWithResponse } from "../../types/error";
import Button from "../../components/button/button";
const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState<{
    signUp?: string;
  }>();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      return await signUp({
        email,
        password,
      });
    },
    onError: (e: unknown) => {
      const error = e as ErrorWithResponse;
      setError({
        signUp: error?.response?.data?.message,
      });
    },
    onSuccess: () => {
      navigate("/register/verify", {
        state: { email: email },
      });
    },
  });
  const registerCheck = z
    .object({
      email: z.string().email("Invalid email format"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/\d/, "Must contain at least one number"),
      confirmPassword: z.string().min(1, "Confirm password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      registerCheck.parse({
        email,
        password,
        confirmPassword,
      });
      mutate();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages: Record<string, string> = {};
        error.errors.forEach((err) => {
          errorMessages[err.path[0] as string] = err.message;
        });
        setErrors(errorMessages);
      }
    }
  };
  const hideError = () => {
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };
  // const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  // const toggleConfirmPasswordVisibility = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };
  return (
    <form className="bg-white" onSubmit={handleRegister}>
      <div className="flex  bg-gray-100 w-full h-screen">
        <div className="flex flex-row-reverse w-full items-center justify-center bg-gray-100">
          <div className="max-w-[1280px] w-full h-[550px] flex shadow-lg rounded-lg">
            <div className="w-1/2 bg-gray-200 flex flex-col items-center justify-center p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-indigo-500 opacity-20"></div>
              <div className="relative text-center">
                <h1 className="text-4xl font-bold text-[#0094FF] mb-5">
                  IT Connected
                </h1>
                <div className="absolute -top-10 -left-56 w-40 h-40 bg-[#89E5DC] rounded-full opacity-70"></div>
                <div className="absolute bottom-32 -right-44 w-56 h-56 bg-[#34A4F7] rounded-full opacity-80"></div>
                <div className="absolute top-40 left-32 w-20 h-20 bg-[#EBB6DA] rounded-full opacity-80"></div>
                <div className="mt-5 space-x-4 text-[#585858]">
                  <Link to="#">About</Link>
                  <Link to="#">Privacy</Link>
                  <Link to="#">Terms of Use</Link>
                  <Link to="#">FAQ</Link>
                </div>
              </div>
            </div>

            <div className="w-1/2 bg-white p-20 flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-center text-[#585858] mb-6">
                Sign Up
              </h2>
              <div className="space-y-5">
                <div>
                  <Input
                    name={"email"}
                    title={"Email"}
                    placeholder={"Enter your email"}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={hideError}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    name={"password"}
                    title={"Password"}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={"Enter your password"}
                    onClick={hideError}
                  />

                  {errors.password && (
                    <p className="text-red-400 text-sm">{errors.password}</p>
                  )}
                </div>
                <div>
                  <Input
                    name={"confirmPassword"}
                    title={"Confirm Password"}
                    onClick={hideError}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={"Enter your password"}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-sm text-center">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <p className="text-red-400 text-sm"> {error?.signUp}</p>
                <Button isLoading={isPending} name="Sign Up"></Button>
                <div className="text-center mt-3">
                  <Link to="#" className="text-[#34A4F7] hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
