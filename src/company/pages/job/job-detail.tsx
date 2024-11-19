import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import SkillVariant from "../../../candidate/components/variant/skill-variant";
import PopupCustom from "../../components/pop-up/pop-up";
import IconAddress from "../../../candidate/assets/svg/icon_address.svg";
import IconOffice from "../../../candidate/assets/svg/icon_office.svg";
import IconClock from "../../../candidate/assets/svg/icon_clock.svg";
import { useParams } from "react-router-dom";
import { useJobApplications } from "../../hooks/useJobApplications";
import ApplyList from "./apply-list";

const DetailPostJob: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { slug } = useParams();
  const pagination = { current: 1, limit: 5 };

  const { data, isLoading } = useJobApplications(slug as string, pagination);

  if (isLoading) return "...Loading";

  const showDeleteConfirm = () => {
    setIsModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    console.log("This job post was deleted");
    setIsModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="md:w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-black">Detail Post Job</h1>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-gray-700" type="button">
              <FiEdit size={24} />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              type="button"
              onClick={showDeleteConfirm}
            >
              <FiTrash2 size={24} />
            </button>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg shadow-md mb-5">
          <h1 className="text-2xl font-bold mb-2 text-black">
            Front End Developer (ReactJS, NextJS, JavaScript)
          </h1>
          <p className="text-base text-black mb-2">Meta Tech</p>

          <div className="flex items-center text-base text-black my-2">
            <span className="mr-2 text-gray-500"></span>
            <span>Sign in to view salary</span>
          </div>

          <div className="flex items-center gap-2 text-base text-black my-3">
            <img src={IconAddress} alt="" />
          </div>

          <div className="flex items-center gap-2 text-base text-black my-3">
            <img src={IconOffice} alt="" />
            <span>Full-time</span>
          </div>

          <div className="flex items-center gap-2 text-base text-black my-3">
            <img src={IconClock} alt="" />
            <span>
              {formatDistanceToNow(data?.data.createdAt || " ", {
                addSuffix: true,
              })}
            </span>
          </div>

          <div className="flex gap-2 mt-3">
            <SkillVariant skill="nodejs" />
          </div>
        </div>
      </div>

      <PopupCustom
        visible={isModalVisible}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        title="Delete this job"
        titleCancel="Cancel"
        titleConfirm="Delete"
      >
        <p>Do you want to delete this job post?</p>
      </PopupCustom>
      <ApplyList></ApplyList>
    </div>
  );
};

export default DetailPostJob;
