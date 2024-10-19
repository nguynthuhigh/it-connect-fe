import React from "react";
import Input from "../../../shared/components/input-pattern/input";
// import SelectSearch from "../../../shared/components/input-pattern/select";
import DescriptionJob from '../../components/add-new-post/description-job';
import SkillSelect from "../../components/add-new-post/skill-select";
import LocationSelect from "../../components/add-new-post/location-select";
const EditPostJob: React.FC = () => {
  return (
    <div className="bg-white p-6"> {/* Added padding here */}
      <h1 className="text-black font-bold text-xl mb-6">Edit Post Job</h1> 
      <div className="flex justify-between mb-6">
        <Input
          placeholder="Senior Nodejs...."
          name="title"
          title="Job title"
          className="w-[70%]"
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

      <div className="flex items-center justify-between mb-6">
        <Input
          placeholder="50 000 000"
          name="Salary"
          title="Salary"
          className="w-[40%]"
        ></Input>
        <div className="flex items-center w-[60%]">
          <label className="mr-4 text-sm font-medium text-gray-700"></label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="visibility"
                value="public"
                className="mr-2"
              />
              Public
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="visibility"
                value="private"
                className="mr-2"
              />
              Private
            </label>
          </div>
        </div>
      </div>
      <LocationSelect
        name="location"
        title="Location"
        options={[
          { value: "location1", label: "Location 1" },
          { value: "location2", label: "Location 2" },
          { value: "location3", label: "Location 3" },
        ]}
      />
      <DescriptionJob title="Why you'll love working here"></DescriptionJob>
      <DescriptionJob title="Job Top 3 Reasons"></DescriptionJob>
      <DescriptionJob title="Your skill and experience"></DescriptionJob>

      <div className="flex justify-end space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save Change
        </button>
      </div>
    </div>
  );
};

export default EditPostJob;
