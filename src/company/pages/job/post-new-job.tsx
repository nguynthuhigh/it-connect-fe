import React from "react";
import Input from "../../../shared/components/input-pattern/input";
import DescriptionJob from '../../components/add-new-post/description-job';
import SkillSelect from "../../components/add-new-post/skill-select";
import LocationSelect from "../../components/add-new-post/location-select";
import StatusSelect from "../../components/add-new-post/status-select";
const AddNewPost: React.FC = () => {
  return (
    <div className="bg-white p-6"> {/* Added padding here */}
      <h1 className="text-black font-bold text-[30px] mb-6">Post New Job</h1> 
      <div className="flex justify-between mb-6 gap-5">
        <Input
          placeholder="Senior Nodejs...."
          name="title"
          title="Job title"
          className="w-full"
        ></Input>
        <SkillSelect
        name="skill"
        title="Skill"
        options={[
          { value: "java", label: "Java" },
          { value: "css", label: "CSS" },
          { value: "python", label: "Python" },
        ]}
      />
      </div>
      
      <div className="flex gap-5">
        <LocationSelect
          name="location"
          title="Location"
          options={[
            { value: "vietnam", label: "Viet Nam" },
            { value: "ohio", label: "Ohio" },
            { value: "her heart", label: "Her Heart" },
          ]}
        />
        <StatusSelect
          name="status"
          title="Status"
          options={[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
            { value: "inlove", label: "InLove" },
          ]}
        />
      </div>
      <div className="flex items-center gap-5 mb-6">
        <Input
          placeholder="5.000.000đ"
          name="Salary"
          title="Salary"
          className="w-[300px]"
        ></Input>
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-main"></label>
            <div className="flex items-center mt-5 space-x-4">
            <label className="flex items-center gap-2 text-gray-main">
            Public
            <input
              type="radio"
              name="visibility"
              value="public"
              className="mr-2"
            />
          </label>
          <label className="flex items-center gap-2 text-gray-main">
            Private
            <input
              type="radio"
              name="visibility"
              value="private"
              className="mr-2"
            />
          </label>
          </div>
        </div>
      </div>


      <DescriptionJob title="Why you'll love working here"></DescriptionJob>
      <DescriptionJob title="Job Top 3 Reasons"></DescriptionJob>
      <DescriptionJob title="Your skill and experience"></DescriptionJob>
      <DescriptionJob title="Job Description"></DescriptionJob>

      <div className="flex items-center justify-end mt-5 mr-3 space-x-4">
        <label className="flex items-center gap-2 text-gray-main">
          Public
          <input
            type="radio"
            name="visibility"
            value="public"
            className="mr-2"
          />
        </label>
        <label className="flex items-center gap-2 text-gray-main">
          Private
          <input
            type="radio"
            name="visibility"
            value="private"
            className="mr-2"
          />
        </label>
      </div>

      <div className="flex justify-end space-x-4 mt-5">
        <button
          className="bg-[#0094df] hover:bg-[#007bdf] text-white font-bold py-3 px-20 rounded-full focus:outline-none focus:shadow-"
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewPost;
