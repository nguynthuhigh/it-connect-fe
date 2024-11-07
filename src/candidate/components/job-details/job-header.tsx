import IconSalary from '../../assets/svg/icon_salary.svg';
import IconBlueHeart from '../../assets/svg/icon_blueHeart.svg';
import IconAddress from '../../assets/svg/icon_address.svg';
import IconOffice from '../../assets/svg/icon_office.svg';
import IconClock from '../../assets/svg/icon_clock.svg';
import { useState } from 'react';
import IconPopup from "../../assets/svg/icon_popup.svg"
import { ToastContainer, toast } from 'react-toastify';

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


  const [showPopup, setShowPopup] = useState(false);
  const [selectedCV, setSelectedCV] = useState<string | null>(null);

  const handleApplyNowClick = () => {
    setShowPopup(true);
  };

  const handleSelectCV = (cv: string) => {
    // Chỉ thay đổi selectedCV nếu cv chưa được chọn
    setSelectedCV(prevSelectedCV => (prevSelectedCV === cv ? null : cv));
  };

  
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCV(null);
  };

  const btnSubmit = () => {
    toast.success('Applied Successfully');
    setShowPopup(false);
    setSelectedCV(null);
  }


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
          <button
            className="w-full bg-[#0094FF] text-white py-2 px-6 rounded-md text-base hover:bg-[#0077ff]"
            onClick={handleApplyNowClick}
          >
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

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-4 sm:p-0 px-4 sm:px-16 sm:py-10 py-10 w-full max-w-[600px] border shadow-xl rounded-lg relative">
              <button onClick={handleClosePopup} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                &times;
              </button>

              <div className="text-[23px] font-semibold mb-4 text-[#393939]">
                Master - Frontend ReactJS Dev (JavaScript, HTML5) tại ITC Company
              </div>

              <div className="mb-4 flex justify-center">
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  className="w-full p-4 sm:px-4 focus:outline-none focus:border focus:ring-[#0094df] hover:border-[#0094df] hover:ring-1 focus:ring-1 focus:border-[#0094df] placeholder-[#969696] h-[58px] border border-[#969696] rounded"
                />
              </div>

              <div className="space-y-4 pb-10">
                {['CV 001.pdf', 'CV 002.pdf'].map((cv, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded hover:border-blue-400 hover:border cursor-pointer ${
                      selectedCV === cv ? 'border border-blue-400 text-[#0094df] bg-blue-50' : 'border border-gray-300'
                    }`}
                    onClick={() => handleSelectCV(cv)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="cv"
                          checked={selectedCV === cv}
                          readOnly
                          className="mr-2"
                        />
                        <span className="font-semibold">{cv}</span>
                        <p className="ml-3 w-[300px] text-gray-600">
                          {selectedCV === cv
                            ? `Bạn đã chọn ${cv} để gửi đến ITC, chúc may mắn!`
                            : 'Hãy làm cho chúng tôi có ấn tượng với bạn, chúc may mắn!'}
                        </p>
                      </div>
                      <div className="flex justify-end items-end text-end">
                        <img className="" src={IconPopup} alt="" />
                      </div>
                    </div>

                    {selectedCV === cv && (
                      <div className="mt-4 pt-2 border-t-2 border-blue-400">
                        <h2 className="text-lg font-semibold mb-2">Thư xin việc</h2>
                        <textarea
                          placeholder="Liệt kê những điểm mạnh của bạn để chúng tôi biết năng lực của bạn hấp dẫn như thế nào nhé!"
                          className="w-full p-3 sm:p-4 text-black h-[100px] border border-gray-300 rounded focus:ring-2 focus:outline-none"
                          onClick={(e) => e.stopPropagation()} // Ngăn sự kiện onClick lan truyền
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className='flex justify-center'>
                <button 
                  className='bg-[#0094df] text-white px-5 hover:ring rounded-full py-2'
                  onClick={btnSubmit}  
                >
                  Apply Now
                </button>
              </div>
            </div>     
          </div>
        )}

      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobHeader;
