import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ReactQuill from "react-quill"; // Import ReactQuill cho editor
import "react-quill/dist/quill.snow.css"; // Import style cho ReactQuill

const EditProfile = () => {
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <form className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

        {/* Upload Logo */}
        <div className="flex justify-center mb-6">
          <div className="border border-dashed border-gray-400 rounded-full p-10 relative">
            <FaCamera className="text-gray-400 text-3xl absolute inset-0 m-auto" />
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
          </div>
        </div>

        {/* Grid layout with 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Company Name</label>
            <input
              type="text"
              placeholder="IT Connected..."
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Website</label>
            <input
              type="url"
              placeholder="example.com"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Industry</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option value="IT Product">IT Product</option>
              {/* Thêm các tùy chọn khác */}
            </select>
          </div>
        </div>

         {/* Row 2 */}
         <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Country</label>
            <select className="w-full border border-gray-300 p-2 rounded-md">
              <option value="Vietnam">Vietnam</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              {/* Thêm các tùy chọn quốc gia khác */}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Working Day</label>
            <input
              type="text"
              placeholder="Monday to Friday"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Overtime policy</label>
            <input
              type="text"
              placeholder="No OT"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Company size</label>
            <input
              type="text"
              placeholder="50-100 Employees"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        {/* Row 4 - Company Description */}
        <div>
          <label className="block mb-2 text-sm font-medium">Company Description</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={(content) => setDescription(content)}
            className="bg-white"
          />
        </div>

        {/* Row 5 - Company Skill */}
        <div>
          <label className="block mb-2 text-sm font-medium">Company Skill</label>
          <ReactQuill
            theme="snow"
            value={skill}
            onChange={(content) => setSkill(content)}
            className="bg-white"
          />
        </div>

        {/* Row 6 - Address and Map */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter company address"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Select location in map</label>
            <img
              src="https://tapchigiaothong.qltns.mediacdn.vn/tapchigiaothong.vn/files/minh.phuong/2015/06/06/221407_maps1-1245.png"
              alt="Map"
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

