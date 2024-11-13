import IconSalary from '../../assets/svg/icon_salary.svg';
import IconBlueHeart from '../../assets/svg/icon_blueHeart.svg';
import IconAddress from '../../assets/svg/icon_address.svg';
import IconOffice from '../../assets/svg/icon_office.svg';
import IconClock from '../../assets/svg/icon_clock.svg';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
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
  const [selectedCV, setSelectedCV] = useState<File | null>(null);
  const [useCurrentCV, setUseCurrentCV] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [name, setName] = useState('');
  const [showError, setShowError] = useState(false);
  const [showFileError, setShowFileError] = useState(false);

  const handleApplyNowClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setName('');
    setSelectedCV(null);
    setShowError(false);
    setShowFileError(false);
    setUseCurrentCV(false);
    setCoverLetter('');
  };

  const btnSubmit = () => {
    if (!name.trim()) {
      setShowError(true);
      return;
    }

    if (!useCurrentCV && !selectedCV) {
      setShowFileError(true);
      return;
    }
    
    toast.success('Applied Successfully');
    handleClosePopup();
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedCV(acceptedFiles[0]);
      setUseCurrentCV(false);
      setShowFileError(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    maxSize: 3 * 1024 * 1024, // 3MB
  });

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
                Master - Frontend ReactJS Dev (JavaScript, HTML5) at ITC Company
              </div>

              <div className='font-semibold text-[18px]'>Full name</div>
              <input
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 focus:outline-none border border-gray-300 rounded mt-2"
              />
              {showError && <p className="text-red-500 mt-1 text-sm">Full Name is required.</p>}

              <div className="font-semibold mt-4 text-[18px]">Your CV</div>
              <div className="flex-col items-center border-gray-300 rounded border px-4 py-3 focus:border-[#0094df] focus:border gap-3 mt-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className='w-5 h-5'
                    checked={useCurrentCV}
                    onChange={() => {
                      setUseCurrentCV(true);
                      setSelectedCV(null);
                    }}
                  />
                  <span className="ml-2">Use your current CV</span>
                </label>
                <span className="text-blue-500 cursor-pointer ml-7">Test CV.pdf</span>
              </div>
              <div className="flex-col border border-gray-300 px-4 py-3 rounded items-center gap-3 mt-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className='w-5 h-5'
                    checked={!useCurrentCV}
                    onChange={() => setUseCurrentCV(false)}
                  />
                  <span className="ml-2">Upload new CV</span>
                </label>
                <div
                  {...getRootProps()}
                  className={`px-4 pt-2 cursor-pointer ${
                    selectedCV ? 'text-blue-500' : 'border-gray-300'
                  }`}
                >
                  <input {...getInputProps()} />
                  {selectedCV ? (
                    <div className='ml-3 flex-col'>
                      <div className='flex gap-2 items-center'>
                        <p className='border w-fit px-2 py-1 text-black'>Choose File</p>
                        <p>{selectedCV.name}</p>
                      </div>
                      <div className='text-black my-1'>
                        You have selected <span className='text-blue-500'>{selectedCV.name}</span> for submission to ITConnect. Good luck!
                      </div>
                    </div>
                  ) : (
                    <div className='flex-col gap-3 items-center'>
                      <div className='ml-3'>
                        <p className='border w-fit px-2 py-1'>Choose File</p>
                      </div>
                      <div className='mt-1 ml-3'>
                        <p className='text-[#A6A6A6] text-[14px] font-semibold'>
                          Supports .doc, .docx, .pdf, up to 3MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {showFileError && <p className="text-red-500 mt-1 text-sm">Please select a file.</p>}

              <div className="font-semibold mt-4 text-[18px]">Cover Letter</div>
              <textarea
                placeholder="What skills, work projects or achievements make you a strong candidate?"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded mt-2"
                maxLength={500}
              />
              <p className="text-gray-500 text-right">{500 - coverLetter.length} characters remaining</p>

              <div className="flex justify-center mt-6">
                <button 
                  className="bg-blue-500 text-white px-5 py-2 rounded-full"
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
