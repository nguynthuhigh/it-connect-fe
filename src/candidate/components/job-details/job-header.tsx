import IconSalary from '../../assets/svg/icon_salary.svg';
import IconBlueHeart from '../../assets/svg/icon_blueHeart.svg';
import IconAddress from '../../assets/svg/icon_address.svg';
import IconOffice from '../../assets/svg/icon_office.svg';
import IconClock from '../../assets/svg/icon_clock.svg';

const JobHeader = () => {
  const salaries = [
    { icon: IconSalary, text: 'Sign in to view salary' },
  ];

  const otherJobDetails = [
    { icon: IconAddress, text: '97 Tran Thi Nghi, KDC Cityland, Go Vap district, Ho Chi Minh city' },
    { icon: IconOffice, text: 'At office' },
    { icon: IconClock, text: 'Posted 4 hours ago' },
  ];

  const skills = ['ReactJS', 'Javascript', 'NextJs'];

  return (
    <div className="bg-gradient-to-b px-5 py-10 from-[#78B6FF] to-[#3B95FF]">
      <div className="bg-white p-5 rounded-[16px] shadow-md border">
        <h1 className="text-[28px] font-bold text-black">
          Front End Developer (ReactJS, NextJS, JavaScript)
        </h1>
        <span className="text-[18px] text-[#7C7A7A] mb-2">Meta Tech</span>

        {salaries.map((salary, index) => (
          <div key={index} className="flex items-center gap-2 text-base text-black my-3">
            <img src={salary.icon} alt="" />
            <span>{salary.text}</span>
          </div>
        ))}

        <div className="flex gap-3 py-1">
          <button className="w-full bg-[#0094FF] text-white py-2 px-6 rounded-md text-base hover:bg-[#0077ff]">
            Apply now
          </button>
          <img src={IconBlueHeart} alt="Heart icon" />
        </div>

        {otherJobDetails.map((detail, index) => (
          <div key={index} className="flex items-center gap-2 text-base text-black my-3">
            <img src={detail.icon} alt="" />
            <span>{detail.text}</span>
          </div>
        ))}

        <div className="flex gap-3 mt-3 items-center">
          <span>Skills:</span>
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border-[#B1B1B1] border text-[12px] px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
