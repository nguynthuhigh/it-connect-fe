import React from "react";
import WrapInfo from "./wrap-info";
interface CompanyInfoProps {
  type: string;
  industry: string;
  size: string;
  working_day: string;
  ot_policy: string;
  description: string;
  skill_description: string;
}
const CompanyInfo: React.FC<CompanyInfoProps> = (props) => {
  return (
    <div className="w-full space-y-4">
      <WrapInfo title="General information">
        <div className="grid grid-cols-3 gap-5">
          <Pattern title="Company industry" content={props.industry}></Pattern>
          <Pattern title="Company size" content={props.size}></Pattern>
          <Pattern title="Country" content="Vietnamese"></Pattern>
          <Pattern title="Overtime policy" content={props.ot_policy}></Pattern>
          <Pattern title="Working days" content={props.working_day}></Pattern>
        </div>
      </WrapInfo>
      {props.description && (
        <WrapInfo title="Company overview">
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </WrapInfo>
      )}
      {props.skill_description && (
        <WrapInfo title="Your skills and experience">
          <div dangerouslySetInnerHTML={{ __html: props.skill_description }} />
        </WrapInfo>
      )}
    </div>
  );
};
const Pattern: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="font-inter">
      <h1 className="font-semibold text-gray-main text-[12px]">{title}</h1>
      <h1 className="text-sm font-medium">{content}</h1>
    </div>
  );
};
export default CompanyInfo;
