import React, { useState } from 'react';
import { z } from "zod";
import visibleIcon from "../../../assets/png/visible_eye.png";
import invisibleIcon from "../../../assets/png/invisible_eye.png";

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [errors, setErrors] = useState<{ newPassword?: string; confirmNewPassword?: string }>({});

  const togglePasswordVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  }; 


  const hideError = () => {
    if (Object.keys(errors).length > 0) {
      setErrors({}); //an thong bao loi
    }
  };
  //validate
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordSchema = z
      .object({
        newPassword: z
          .string()
          .min(8, "Password must be at least 8 characters")
          .regex(/\d/, "Must contain at least one number"),
        confirmNewPassword: z.string().min(1, "Confirm password is required"),
      })
      .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: "Passwords don't match",
        path: ["confirmNewPassword"],
      });

    try {
      passwordSchema.parse({ newPassword, confirmNewPassword });
      setErrors({});
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

  return (
    <div className='w-full max-w-4xl p-6 bg-white shadow-xl rounded-md'>
    <div className='w-full max-w-4xl p-6  min-h-[520px] flex flex-col justify-center'>
      <form onSubmit={handleSubmit} className="space-y-9">
        {/* Old password */}
        <div className="relative pb-6">
          <input
            type={showOldPassword ? 'text' : 'password'}
            name="oldPassword"
            value={oldPassword}
            onClick={hideError}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter old password"
            className="w-full p-2 pr-10 border-b border-gray-400 focus:outline-none"
          />
          <button type="button" 
                  onClick={()=>togglePasswordVisibility(setShowOldPassword)} 
                  className="absolute right-2 top-1/2 transform -translate-y-5">
          <img
              src={showOldPassword ? visibleIcon : invisibleIcon}
              alt="Toggle visibility"
              className="w-6 h-6 "
            />
          </button>
          {errors.newPassword && <p className="absolute text-red-500 text-sm mt-1">{errors.newPassword}</p>}
        </div>
        {/* New password */}
        <div className="relative pb-6">
          <input
            type={showNewPassword ? 'text' : 'password'}
            name="newPassword"
            value={newPassword}
            onClick={hideError}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full p-2 pr-10 border-b border-gray-400 focus:outline-none"
          />
          <button type="button" 
                  onClick={()=>togglePasswordVisibility(setShowNewPassword)}  
                  className="absolute right-2 top-1/2 transform -translate-y-5">
          <img
              src={showNewPassword ? visibleIcon : invisibleIcon}
              alt="Toggle visibility"
              className="w-6 h-6 "
            />
          </button>
          {errors.newPassword && <p className="absolute text-red-500 text-sm mt-1">{errors.newPassword}</p>}
        </div>
        {/* confirm new password */}
        <div className="relative pb-6">
          <input
            type={showConfirmNewPassword ? 'text' : 'password'}
            name="confirmNewPassword"
            value={confirmNewPassword}
            onClick={hideError}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full p-2 pr-10 border-b border-gray-400 focus:outline-none"
          />
          <button type="button" 
                  onClick={()=>togglePasswordVisibility(setShowConfirmNewPassword)}  
                  className="absolute right-2 top-1/2 transform -translate-y-5">
          <img
              src={showConfirmNewPassword ? visibleIcon : invisibleIcon}
              alt="Toggle visibility"
              className="w-6 h-6"
            />
          </button>
          {errors.confirmNewPassword && <p className="absolute text-red-500 text-sm mt-1">{errors.confirmNewPassword}</p>}
        </div>

        <div className="mt-6 flex  justify-center space-x-4">
          <button type="button" className="px-10 py-1.5 text-gray-600 font-medium">Cancel</button>
          <button type="submit" className="px-10 py-0 bg-blue-main text-white rounded-md font-medium">Update</button>
        </div>
      </form>
      </div>
      </div>
  );
};

export default ChangePassword;
