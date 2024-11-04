import IconVietNam from '../../assets/png/icon_Vietnam.png';
import ImageOB from '../../assets/png/icon_OB.png';

const companyInfo = [
  { label: "Company type:", value: "IT Product" },
  { label: "Industry:", value: "AI, Blockchain and Deep Tech Services" },
  { label: "Company size:", value: "51-150 employees" },
  {
    label: "Country:",
    value: (
      <div className='flex gap-2 items-center'>
        <img src={IconVietNam} alt="" />
        <span>Vietnam</span>
      </div>
    )
  },
  { label: "Working days:", value: "Monday - Saturday" },
  { label: "Overtime policy:", value: "Extra salary for OT" }
];

const CompanySidebar = () => {
  return (
    <div className="bg-white p-5 border rounded-2xl">
      <div className="flex">
        <img
          src={ImageOB}
          alt="Company Logo"
          className="w-[120px] h-[120px] rounded-md mr-2"
        />
        <div className="flex flex-col">
          <span className="text-[18px] font-semibold">Meta Tech</span>
          <span className="text-[#0075FF]">View Company</span>
        </div>
      </div>

      <p className="text-base py-5">
        Meta Tech - The company provides technology services.
      </p>

      <div className="text-sm">
        {companyInfo.map((item, index) => (
          <div key={index} className={`flex justify-between mb-2 ${index === companyInfo.length - 1 ? 'py-3' : 'border-b border-dashed py-3'}`}>
            <span className="font-medium text-[#B1B1B1]">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySidebar;
