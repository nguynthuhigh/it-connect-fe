import WrapInfo from "../company/wrap-info";

interface JobMainContentProps {
  description: string;
  experience: string;
  environment: string;
  special: string;
}
const JobMainContent: React.FC<JobMainContentProps> = ({
  description,
  special,
  experience,
  environment,
}) => {
  return (
    <div className="p-5 mt-5 space-y-5">
      <WrapInfo title="Top 3 reasons to join us">
        <div dangerouslySetInnerHTML={{ __html: special }} />
      </WrapInfo>
      <WrapInfo title="Job description">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </WrapInfo>
      <WrapInfo title="Your skills and experience">
        <div dangerouslySetInnerHTML={{ __html: experience }} />
      </WrapInfo>
      <WrapInfo title="Why you'll love working here">
        <div dangerouslySetInnerHTML={{ __html: environment }} />
      </WrapInfo>
     
    </div>
  );
};

export default JobMainContent;
