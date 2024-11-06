import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import visibleIcon from "../../assets/png/visible_eye.png";
import invisibleIcon from "../../assets/png/invisible_eye.png";
const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const registerCheck = z
    .object({
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/\d/, "Must contain at least one number"),
      confirmPassword: z.string().min(1, "Confirm password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      //Khai bao kiem tra tu chon
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });
  const [isSignUpSuccess, setIsSignUpSuccess] = useState<boolean>(false);
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      registerCheck.parse({
        //kiem tra du lieu o trong registerCheck
        email,
        password,
        confirmPassword,
      });
      const newUser = {
        email,
        password,
      };
      localStorage.setItem("registeredUser", JSON.stringify(newUser));
      setIsSignUpSuccess(true);
      // Chuyen toi trang login sau 1s
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        //Kiem tra loi co phai do zod tao ra hay ko
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
      setErrors({}); //an thong bao loi
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  // An/hien pass va confirm pass
  return (
    <div className="min-h-screen flex font-inter justify-center items-start">
      <div className="max-w-md w-full space-y-3">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-10 text-center text-[40px] font-bold">
            New account, new jobs!
          </h2>
        </div>
        <form onSubmit={handleRegister}>
          <div>
            <label className="text-[20px] font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={hideError}
              className="block w-full h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mt-5 relative">
            <label className="text-[20px] font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={hideError}
              className="block w-full h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
              placeholder="Enter password"
            />
            <img
              src={showPassword ? visibleIcon : invisibleIcon}
              alt="Toggle Password Visibility"
              className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-12 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mt-5 relative">
            <label className="text-[20px] font-semibold">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onClick={hideError}
              className="block w-full h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
              placeholder="Confirm password"
            />
            <img
              src={showConfirmPassword ? visibleIcon : invisibleIcon}
              alt="Toggle Password Visibility"
              className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-12 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="mt-3 py-1">
            <a
              href=""
              className="text-[#0075FF] text-[20px] flex items-center justify-end font-medium"
            >
              Forgotten password
            </a>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <button type="submit" className=" text-white font-bold rounded-[15px] bg-blue-main w-full h-[60px] text-lg">
            Sign Up
            </button>
          </div>
        </form>
        <div className="text-center pt-2">
          <p className="text-[20px] text-gray-600 ">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-main font-semibold"
            >
              Sign in now!
            </a>
          </p>
        </div>
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-[#BDBDBD]"></div>
          <span className="mx-8 text-[20px]">Or</span>
          <div className="flex-grow border-t border-[#BDBDBD]"></div>
        </div>
        <div className="pt-1">
          <a
            href="https://sso-pointer.vercel.app/authorize?clientId=66f38b1441aea9e24920e456"
            type="button"
            className=" w-full border-[2px] border-[#4285F4] text-[#4285F4] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <img
              alt="pointer logo"
              className={
                "mr-2 -ml-1 w-6 h-6 border-white border rounded-full"
              }
              src="https://i.imgur.com/5cYzRrm.png"
            />
            Sign in with Pointer<div></div>
          </a>
        </div>
        {isSignUpSuccess && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-md shadow-lg text-center">
              <h2 className="text-2xl font-bold text-green-600">
                Sign Up Successful!
              </h2>
              <p className="mt-2">Redirecting to login page...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
