import IconPointer from '../../assets/svg/icon_Pointer.svg';
import IconSalary from '../../assets/svg/icon_salary.svg';
import IconOffice from '../../assets/svg/icon_office.svg';
import IconAddress from '../../assets/svg/icon_address.svg';

const FormJobListCompany = () => {

    const jobHeader = [
        { text: "Posted 2 days ago", style: "font-semibold text-[#7C7A7A] text-[12px]" },
        { text: "Senior Software Engineer, Backend (Py, NodeJS, Java)", style: "mt-1 font-semibold" }
      ];
    
      const jobDetails = [
        { icon: IconPointer, text: "Pointer Wallet", alt: "Pointer icon" }
      ];
    
      const jobInfo = [
        { icon: IconSalary, text: "Up to 500,000,000₫", alt: "Salary icon" },
        { icon: IconOffice, text: "Remote", alt: "Remote icon" },
        { icon: IconAddress, text: "Ho Chi Minh City", alt: "Location icon" },
      ];
    
      const skills = ["ReactJS", "JavaScript", "NextJs"];

  return (
    <div className="w-[375px] h-max p-4 bg-white border border-[#CECECE] rounded-lg shadow-md">
        {jobHeader.map((item, index) => (
          <div key={index} className={item.style}>
            {item.text}
          </div>
        ))}
        {jobDetails.map((detail, index) => (
          <div key={index} className="flex items-center mt-2">
            <img src={detail.icon} alt={detail.alt} />
            <span className="text-[#7C7A7A] ml-2">{detail.text}</span>
          </div>
        ))}
        <div className="mt-3 border-t border-dashed pt-3">
          {jobInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2 mt-1 font-medium">
              <img className="w-4 h-4" src={info.icon} alt={info.alt} />
              {info.text}
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border-[#7C7A7A] border text-[12px] font-semibold px-3 py-1 rounded-full text-center"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
  )
}

export default FormJobListCompany