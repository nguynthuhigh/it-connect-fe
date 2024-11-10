import React, { useState } from "react";
import { z } from "zod";
import VisibleIcon from "../../assets/svg/visible_eye.svg";
import InvisibleIcon from "../../assets/svg/invisible_eye.svg";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Define the validation schema using zod
  const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data using zod
    const validationResult = schema.safeParse({ email, password });

    if (!validationResult.success) {
      // Extract errors if validation fails
      const newErrors: { email?: string; password?: string } = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0] === "email") newErrors.email = err.message;
        if (err.path[0] === "password") newErrors.password = err.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle successful login logic here
      console.log("Login successful:", validationResult.data);
    }
  };

  return (
    <div className="min-h-screen font-inter flex justify-center items-start mt-5 sm:mt-10">
      <form onSubmit={handleSubmit} className="sm:w-full sm:max-w-[568px] sm:p-0 p-4 space-y-3">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-[32px] sm:text-[40px] font-bold">Welcome back!</h1>
        </div>
        <div>
          <label className="text-[16px] sm:text-[20px] font-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-[400px] sm:w-full h-[50px] sm:h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="pt-3 relative">
          <label className="text-[16px] sm:text-[20px] font-semibold">Password</label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full h-[50px] sm:h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
            placeholder="Enter password"
          />
          <img
            src={showPassword ? InvisibleIcon : VisibleIcon}
            alt="Toggle Password Visibility"
            className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-[48px] sm:mt-[58px] cursor-pointer"
            onClick={togglePasswordVisibility}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="mt-3 py-1">
          <a href="" className="text-[#0075FF] text-[16px] sm:text-[20px] flex items-center justify-end font-medium">
            Forgotten password
          </a>
        </div>
        <div className="mt-3 flex items-center justify-center">
          <button type="submit" className="text-white font-bold rounded-[10px] sm:rounded-[15px] bg-blue-main w-full h-[50px] sm:h-[60px] text-base sm:text-lg">
            Sign In
          </button>
        </div>
        <div className="text-center pt-2">
          <p className="text-[16px] sm:text-[20px] text-gray-600">
            Do not have an account?{" "}
            <a href="/register" className="text-blue-main font-semibold">
              Sign up
            </a>
          </p>
        </div>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-[#BDBDBD]"></div>
          <span className="mx-8 text-[16px] sm:text-[20px]">Or</span>
          <div className="flex-grow border-t border-[#BDBDBD]"></div>
        </div>
        <div className="">
          <a
            href="https://sso-pointer.vercel.app/authorize?clientId=66f38b1441aea9e24920e456"
            type="button"
            className="w-full border-[2px] border-[#4285F4] text-[#4285F4] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mb-2"
          >
            <img
              alt="pointer logo"
              className="mr-2 -ml-1 w-6 h-6 border-white border rounded-full"
              src="https://i.imgur.com/5cYzRrm.png"
            />
            Sign in with Pointer
            <div></div>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
