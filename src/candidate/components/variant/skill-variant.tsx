import React from "react";
import { capitalizeFirstLetter } from "../../../shared/utils/utils";

const SkillVariant: React.FC<{ skill: string }> = ({ skill }) => {
  const value = skill.toLowerCase();
  switch (true) {
    case value.includes("python"):
      return (
        <div
          className={`border-red-400 py-0.5 px-2.5 border-[2px] font-semibold text-red-500 rounded-full bg-red-50`}
        >
          <h1 className="text-sm">Python</h1>
        </div>
      );
    case value.includes("node"):
      return (
        <div
          className={`border-green-400 py-0.5 px-2.5 border-[2px] font-semibold text-green-500 rounded-full bg-green-50`}
        >
          <h1 className="text-sm">NodeJS</h1>
        </div>
      );
    case value.includes("java"):
      return (
        <div
          className={`border-yellow-400 py-0.5 px-2.5 border-[2px] font-semibold text-yellow-500 rounded-full bg-yellow-50`}
        >
          <h1 className="text-sm">Java</h1>
        </div>
      );
    case value.includes("react"):
      return (
        <div
          className={`border-blue-400 py-0.5 px-2.5 border-[2px] font-semibold text-blue-500 rounded-full bg-blue-50`}
        >
          <h1 className="text-sm">React</h1>
        </div>
      );
    case value.includes("blockchain"):
      return (
        <div
          className={`border-red-400 py-0.5 px-2.5 border-[2px] font-semibold text-red-500 rounded-full bg-red-50`}
        >
          <h1 className="text-sm">Blockchain</h1>
        </div>
      );
    case value.includes("typescript"):
      return (
        <div
          className={`border-indigo-400 py-0.5 px-2.5 border-[2px] font-semibold text-indigo-500 rounded-full bg-indigo-50`}
        >
          <h1 className="text-sm">Typescript</h1>
        </div>
      );
    case value.includes("next"):
      return (
        <div
          className={`border-indigo-400 py-0.5 px-2.5 border-[2px] font-semibold text-black-500 rounded-full bg-indigo-50`}
        >
          <h1 className="text-sm">NextJS</h1>
        </div>
      );
    default:
      return (
        <div
          className={`border-black py-0.5 px-2.5 border-[2px] font-semibold text-black rounded-full`}
        >
          <h1 className="text-sm">{capitalizeFirstLetter(skill)}</h1>
        </div>
      );
  }
};
export default SkillVariant;
