import FormJobListCompany from "./form-job-listcompany";

const JobListCompany = () => {
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
      <FormJobListCompany />
      <FormJobListCompany />
      <FormJobListCompany />
      <FormJobListCompany />
    </div>
  );
};

export default JobListCompany;
