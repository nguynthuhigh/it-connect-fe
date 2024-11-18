import { Link } from "react-router-dom";
interface CompanySidebarProps {
  slug: string;
  name: string;
  industry: string;
  logo: string;
  address: string;
  working_day: string;
  size: string;
  ot_policy: string;
}
const CompanySidebar: React.FC<CompanySidebarProps> = ({
  name,
  slug,
  logo,
  industry,
  size,
  ot_policy,
  address,
  working_day,
}) => {
  return (
    <Link className="w-[30%] p-4" to={`/company/${slug}`}>
      <div className="bg-white p-5  border rounded-lg ">
        <div className="flex">
          <img
            src={logo}
            alt="Company Logo"
            className="w-[100px] h-[100px] rounded-md mr-2"
          />
          <div className="flex flex-col">
            <span className="text-[18px] font-semibold">{name}</span>
            <span className="text-[#0075FF]">View Company</span>
          </div>
        </div>

        <p className="text-base py-5">{name}</p>

        <div className="text-sm">
          <Info label="Industry: " value={industry} />
          <Info label="Company size: " value={size} />
          <Info label="Address:" value={address} />
          <Info label="Working days:" value={working_day} />
          <Info label="Overtime policy:" value={ot_policy} />
        </div>
      </div>
    </Link>
  );
};
interface InfoProps {
  label: string;
  value: string;
}
const Info: React.FC<InfoProps> = ({ label, value }) => {
  return (
    <div
      className={`flex justify-between mb-2  'py-3' : 'border-b border-dashed py-3'}`}
    >
      <span className="font-medium text-[#B1B1B1]">{label}</span>
      <span>{value}</span>
    </div>
  );
};
export default CompanySidebar;
