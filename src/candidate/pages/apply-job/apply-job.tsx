import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ToastContainer, toast } from 'react-toastify';

const ApplyJob = () => {

    const [selectedCV, setSelectedCV] = useState<File | null>(null);
    const [useCurrentCV, setUseCurrentCV] = useState(false);
    const [coverLetter, setCoverLetter] = useState('');
    const [name, setName] = useState('');
    const [showError, setShowError] = useState(false);
    const [showFileError, setShowFileError] = useState(false);


    const handleClosePopup = () => {
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
    <div className='mx-auto justify-center pt-10 flex'>
        <ToastContainer />
        <div className="bg-white max-w-[800px] p-4 sm:p-0 px-4 sm:px-16 sm:py-10 py-10 w-full border shadow-xl rounded-lg relative">
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
  )
}

export default ApplyJob