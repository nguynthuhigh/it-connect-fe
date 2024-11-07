import { useState } from 'react';
import IconBlueBack from "../../assets/svg/icon_blueback.svg"
import IconPopup from "../../assets/svg/icon_popup.svg"


const ApplyJob: React.FC = () => {
    const [selectedCV, setSelectedCV] = useState<string | null>(null);
  
    const handleSelectCV = (cv: string) => {
      setSelectedCV(cv === selectedCV ? null : cv);
    };

  return (
    <div className="w-full max-w-[1200px] mx-auto">
        <button className="text-[#0094df] mb-4 font-semibold flex gap-2 items-center text-center">
            <img src={IconBlueBack} alt="" />
            Quay lại
        </button>
        <div className='px-20 py-10 w-full border shadow-xl'>
            <div className="text-[23px] font-semibold mb-4 text-[#393939]">
            Master - Frontend ReactJS Dev (JavaScript, HTML5) tại ITC Company
            </div>
            <div className="mb-4 flex justify-center">
                <input
                type="text"
                placeholder="Họ và Tên"
                className="w-full focus:outline-none focus:border focus:ring-[#0094df] hover:ring-1 focus:ring-1 focus:border-[#0094df] placeholder-[#969696] h-[58px] p-3 border border-[#969696] rounded"
                />
            </div>
            <div className="space-y-4 pb-10">
                {['CV 001.pdf', 'CV 002.pdf', 'CV 003.pdf'].map((cv, index) => (
                <div
                    key={index}
                    className={`p-4 rounded hover:border-blue-400 hover:border cursor-pointer ${
                    selectedCV === cv ? 'border border-blue-400 text-[#0094df] bg-blue-50' : 'border border-gray-300'
                    }`}
                >
                    <div
                    className="flex justify-between items-center"
                    onClick={() => handleSelectCV(cv)}
                    >
                    <div className='flex'>
                        <input
                            type="radio"
                            name="cv"
                            checked={selectedCV === cv}
                            readOnly
                            className="mr-2"
                        />
                        <span className="font-semibold">{cv}</span>
                        <p className="ml-2 text-gray-600">
                            {selectedCV === cv ? `Bạn đã chọn ${cv} để gửi đến ITC, chúc bạn may mắn!` : 'CV xin việc là một thứ quan trọng để chúng tôi để mắt đến bạn, hãy làm thật đẹp nhé!'}
                        </p>
                    </div>
                    <div className='flex justify-end items-end text-end'>
                        <img className='' src={IconPopup} alt="" />
                    </div>
                    </div>

                    {selectedCV === cv && (
                    <div className="mt-4 px-2 pt-2 border-t-2 border-blue-400">
                        <h2 className="text-lg font-semibold mb-2">Thư xin việc</h2>
                        <textarea
                        placeholder="Liệt kê những điểm mạnh của bạn để chúng tôi biết năng lực của bạn hấp dẫn như thế nào nhé!"
                        className="w-full p-3 h-[100px] border border-gray-300 rounded focus:ring-2 focus:outline-none"
                        />
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ApplyJob;
