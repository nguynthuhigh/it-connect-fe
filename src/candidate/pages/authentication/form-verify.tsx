import OTPInput from 'react-otp-input';
import { useState, SetStateAction } from 'react';

const FormVerify = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeOTP = (newOtp: string) => {
    console.log("New OTP:", newOtp); // Debugging
    setOtp(newOtp);
  };

  return (
    <div className='flex justify-center mt-[120px]'>
      <div className='flex text-center rounded-lg shadow-lg'>
        <div className='p-20'>
          <div className='flex justify-center'>
            <img src='' alt="logo ITC" />
          </div>
          <h1 className='font-bold text-[26px] mt-10'>Yêu cầu xác thực</h1>
          <p className='font-medium mt-3'>Vui lòng nhập mã mà chúng tôi đã</p>
          <h2 className='font-medium'>gửi tới <span className='text-[#0094df] font-semibold'>example@gmail.com</span>.</h2>
          <div className='mt-10'>
            <div className='flex justify-center gap-2'>
              <OTPInput
                value={otp}
                onChange={handleChangeOTP}
                numInputs={6}
                inputType="text"
                renderInput={({ style, className: propClassName, ...props }) => (
                  <input
                    style={style}
                    className={`bg-slate-100 mx-1 focus:outline-none focus:border-[#0094df] text-[#0094df] focus:border-2 rounded-md h-12 text-[32px]${
                      
                      error ? "border-red-500" : ""
                    } ${isLoading ? "cursor-not-allowed bg-gray-200" : ""} ${propClassName || ""}`}
                    disabled={isLoading}
                    {...props}
                  />
                )}
              />
            </div>
          </div>
          <div className='mt-20'>
            <button className='bg-[#0094df] px-10 py-3 text-white rounded-full font-medium hover:bg-[#3b9cccd8]'>
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormVerify;
