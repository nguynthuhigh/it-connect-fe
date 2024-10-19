import React, { useState } from "react";
import DeleteConfirmPopup from "../../components/delete-popup";

const DetailPostJob: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDeleteConfirm = () => {
    setIsModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    // Thực hiện logic xóa bài viết ở đây
    console.log("This job post was deleted");
    setIsModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container-default md:flex">
      <div className="md:w-full ">
        <h1 className="text-2xl font-bold mb-4 text-black">Detail Post Job</h1>

        <div className="p-5 bg-white rounded-lg shadow-md mb-5">
          <h1 className="text-2xl font-bold mb-2 text-black">
            Front End Developer (ReactJS, NextJS, JavaScript)
          </h1>
          <p className="text-base text-black mb-2">Meta Tech</p>

          <div className="flex items-center text-base text-black my-2">
            <span className="mr-2 text-gray-500"></span>
            <span>Sign in to view salary</span>
          </div>

          <div className="flex items-center text-base text-black my-2">
            <span className="mr-2 text-gray-500"></span>
            <span>
              97 Tran Thi Nghi, KDC Cityland, Go Vap district, Ho Chi Minh city
            </span>
          </div>

          <div className="flex items-center text-base text-black my-2">
            <span className="mr-2 text-gray-500"></span>
            <span>At office</span>
          </div>

          <div className="flex items-center text-base text-black my-2">
            <span className="mr-2 text-gray-500"></span>
            <span>Posted 4 hours ago</span>
          </div>

          <div className="flex gap-2 mt-3">
            <span>Skill</span>
            <span className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm">
              ReactJS
            </span>
            <span className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-gray-300 text-black py-1 px-3 rounded-full text-sm">
              NextJS
            </span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg shadow-md mb-5">
          <section className="mb-5">
            <h3 className="text-lg font-bold mb-2">Top 3 reasons to join us</h3>
            <ul className="pl-5 mb-2 list-disc">
              <li className="mb-1 text-base text-black">
                Working in a professional environment
              </li>
              <li className="mb-1 text-base text-black">
                Unlimited bonus according to work performance
              </li>
              <li className="mb-1 text-base text-black">
                Fully insured according to country regulations
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-2">Job description</h3>
            <ul className="pl-5 mb-2 list-disc">
              <li className="mb-1 text-base text-black">
                Working in a professional environment
              </li>
              <li className="mb-1 text-base text-black">
                Unlimited bonus according to work performance
              </li>
              <li className="mb-1 text-base text-black">
                Fully insured according to country regulations
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-2">Your skills and experience</h3>
            <ul className="pl-5 mb-2 list-disc">
              <li className="mb-1 text-base text-black">
                Experience in ReactJS, NextJS, JavaScript
              </li>
              <li className="mb-1 text-base text-black">
                Familiar with front-end development
              </li>
              <li className="mb-1 text-base text-black">
                Good communication skills
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-2">Your skills and experience</h3>
            <ul className="pl-5 mb-2 list-disc">
              <li className="mb-1 text-base text-black">
                Experience in ReactJS, NextJS, JavaScript
              </li>
              <li className="mb-1 text-base text-black">
                Familiar with front-end development
              </li>
              <li className="mb-1 text-base text-black">
                Good communication skills
              </li>
            </ul>
          </section>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={showDeleteConfirm} // Gọi hàm khi nhấn nút Delete
          >
            Delete
          </button>
        </div>
      </div>

      {/* Thêm popup xác nhận xóa */}
      <DeleteConfirmPopup
        visible={isModalVisible} // Truyền giá trị state vào đây
        onConfirm={handleDeleteConfirm} // Truyền hàm xử lý xóa
        onCancel={handleDeleteCancel} // Truyền hàm xử lý hủy
      />
    </div>
  );
};

export default DetailPostJob;



