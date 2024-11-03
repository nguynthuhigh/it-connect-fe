import Header from "../../../candidate/components/header/header";
import Input from "../../../shared/components/input-pattern/input";
import { Link } from "react-router-dom";

const AdminLogin = () => {
    return (
        <div className="flex bg-gray-100 w-full h-screen">
            <Header />
            <div className="flex w-full items-center justify-center bg-gray-100">
                <div className="max-w-[1280px] w-full h-[550px] flex shadow-lg rounded-lg">
                    <div className="w-1/2 bg-gray-200 flex flex-col items-center justify-center p-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-indigo-500 opacity-20"></div>
                        <div className="relative text-center">
                            <h1 className="text-4xl font-bold text-[#0094FF] mb-5">IT Connected</h1>
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
                        <h2 className="text-3xl font-semibold text-center text-[#585858] mb-6">Log in</h2>
                        <form className="space-y-5">
                            <div>
                                < Input name={"email"} title={"Email"} placeholder={"Enter your email"} />
                            </div>
                            <div>
                                < Input name={"password"} title={"Password"} placeholder={"Enter your password"} />
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-[#585858]">Keep me logged in</label>
                            </div>
                            <button className="w-full py-3 bg-[#34A4F7] text-white rounded hover:bg-[#3489f7] focus:outline-none">
                                Log in
                            </button>
                            <div className="text-center mt-3">
                                <Link to="#" className="text-[#34A4F7] hover:underline">Forgot password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
