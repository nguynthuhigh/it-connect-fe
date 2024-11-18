import { ChangeEvent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../button/button";

interface ApplyJobProps {
  handleClosePopup: () => void;
  title: string;
  useCurrentCV: boolean;
  onChangeCV: () => void;
  onChangeCurrentCV: () => void;
  selectedCV?: File | null;
  onChangeTextarea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  coverLetter: string;
  handleSubmit: () => void;
  setCV: (file: File) => void;
  name: string;
  isLoading: boolean;
}
const ApplyJob: React.FC<ApplyJobProps> = ({
  handleClosePopup,
  title,
  useCurrentCV,
  onChangeCV,
  onChangeCurrentCV,
  selectedCV,
  onChangeTextarea,
  coverLetter,
  handleSubmit,
  setCV,
  name,
  isLoading,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setCV(acceptedFiles[0]);
      // setUseCurrentCV(false);
      //   setShowFileError(false);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
    maxSize: 3 * 1024 * 1024, // 3MB
  });
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-0 px-4 sm:px-16 sm:py-10 py-10 w-full max-w-[600px] border shadow-xl rounded-lg relative">
        <button
          onClick={handleClosePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="text-[23px] font-semibold mb-4 text-[#393939]">
          {title}
        </div>

        <div className="font-semibold mt-4 text-[18px]">Your CV</div>
        <div className="flex-col items-center border-gray-300 rounded border px-4 py-3 focus:border-[#0094df] focus:border gap-3 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              className="w-5 h-5"
              checked={useCurrentCV}
              onChange={onChangeCV}
            />
            <span className="ml-2">Use your current CV</span>
          </label>
          <span className="text-blue-500 cursor-pointer ml-7">Test CV.pdf</span>
        </div>
        <div className="flex-col border border-gray-300 px-4 py-3 rounded items-center gap-3 mt-3">
          <label className="flex items-center">
            <input
              type="radio"
              className="w-5 h-5"
              checked={!useCurrentCV}
              onChange={onChangeCurrentCV}
            />
            <span className="ml-2">Upload new CV</span>
          </label>
          <div
            {...getRootProps()}
            className={`px-4 pt-2 cursor-pointer ${
              selectedCV ? "text-blue-500" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {selectedCV ? (
              <div className="ml-3 flex-col">
                <div className="flex gap-2 items-center">
                  <p className="border w-fit px-2 py-1 text-black">
                    Choose File
                  </p>
                  <p>{selectedCV.name}</p>
                </div>
                <div className="text-black my-1">
                  submission to{" "}
                  <span className="text-lg font-semibold">{name}</span>. Good
                  luck!
                </div>
              </div>
            ) : (
              <div className="flex-col gap-3 items-center">
                <div className="ml-3">
                  <p className="border w-fit px-2 py-1">Choose File</p>
                </div>
                <div className="mt-1 ml-3">
                  <p className="text-[#A6A6A6] text-[14px] font-semibold">
                    Supports .doc, .docx, .pdf, up to 3MB
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* {showFileError && (
          <p className="text-red-500 mt-1 text-sm">Please select a file.</p>
        )} */}

        <div className="font-semibold mt-4 text-[18px]">Cover Letter</div>
        <textarea
          placeholder="What skills, work projects or achievements make you a strong candidate?"
          value={coverLetter}
          onChange={onChangeTextarea}
          className="w-full p-4 border border-gray-300 rounded mt-2"
          maxLength={500}
        />
        <p className="text-gray-500 text-right">
          {500 - coverLetter.length} characters remaining
        </p>

        <Button
          onClick={handleSubmit}
          isLoading={isLoading}
          className="mt-5"
          name="Apply Now"
        ></Button>
      </div>
    </div>
  );
};

export default ApplyJob;
