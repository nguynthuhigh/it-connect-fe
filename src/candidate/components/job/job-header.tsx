import IconSalary from "../../assets/svg/icon_salary.svg";
import IconBlueHeart from "../../assets/svg/icon_blueHeart.svg";
import IconAddress from "../../assets/svg/icon_address.svg";
import IconOffice from "../../assets/svg/icon_office.svg";
import IconClock from "../../assets/svg/icon_clock.svg";
import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { applyJobAPI, Company, Skill } from "../../services/api/job.api";
import SkillVariant from "../variant/skill-variant";
import { formatDistanceToNow } from "date-fns";
import Popup from "reactjs-popup";
import ApplyJob from "./apply-job";
import { getCookie } from "../../../shared/utils/cookie";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../services/api/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ErrorWithResponse } from "../../types/error";
interface JobHeaderProps {
  jobID: number;
  title: string;
  // level: string;
  // salary: number;
  // is_public_salary: boolean;
  work_type: string;
  // is_public: boolean;
  // author: number;
  // status: number;
  // companyID: number;
  createdAt: string;
  // updatedAt: string;
  Skills: Skill[];
  Company: Company;
}
const JobHeader: React.FC<JobHeaderProps> = ({
  title,
  Company,
  work_type,
  Skills,
  createdAt,
  jobID,
}) => {
  const navigate = useNavigate();
  const [selectedCV, setSelectedCV] = useState<File | null>(null);
  const [currentCV, setCurrentCV] = useState<string>("");
  const [useCurrentCV, setUseCurrentCV] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const token = getCookie("at-itc");
  const { mutate, isPending } = useMutation({
    mutationFn: async (fromData: FormData) => {
      return await applyJobAPI(fromData);
    },
    onError: (e: unknown) => {
      const error = e as ErrorWithResponse;
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
    onSuccess: (data: { message: string }) => {
      setIsOpen(!isOpen);
      toast.success(data.message);
    },
  });
  useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const data = await authAPI();
      setCurrentCV(data.cv);
      return data;
    },
    enabled: !!token,
  });
  const handleApplyNowClick = () => {
    if (!token) {
      navigate("/login");
    }
    setIsOpen(!isOpen);
  };
  const onChangeCV = () => {
    setUseCurrentCV(true);
    setSelectedCV(null);
  };
  const setCV = (file: File) => {
    setSelectedCV(file);
  };
  const handleSubmit = () => {
    console.log(!selectedCV);
    if (!selectedCV && !currentCV) {
      return toast.error("Please choose or upload cv");
    }
    const formData = new FormData();
    formData.append("file", selectedCV || " ");
    formData.append("message", coverLetter);
    formData.append("jobID", jobID.toString());
    mutate(formData);
  };
  return (
    <div className=" md:w-[70%]  p-4">
      <div className=" p-5 rounded-lg bg-white h-full shadow-md border">
        <h1 className="text-[28px] font-bold text-black">{title}</h1>
        <span className="text-[18px] text-[#7C7A7A] mb-2">{Company.name}</span>
        <div className="my-2">
          <img src={IconSalary}></img>
          <h1></h1>
        </div>
        <div className="flex items-center gap-2 text-base text-black my-3">
          <img src={IconAddress} alt="" />
          <span>{Company.address}</span>
        </div>

        <div className="flex items-center gap-2 text-base text-black my-3">
          <img src={IconOffice} alt="" />
          <span>{work_type}</span>
        </div>

        <div className="flex items-center gap-2 text-base text-black my-3">
          <img src={IconClock} alt="" />
          <span> {formatDistanceToNow(createdAt, { addSuffix: true })}</span>
        </div>

        <div className="flex gap-3 py-1">
          <button
            className="w-full bg-[#0094FF] text-white py-2 px-6 rounded-md text-base hover:bg-[#0077ff]"
            onClick={handleApplyNowClick}
          >
            Apply now
          </button>
          <img src={IconBlueHeart} alt="Heart icon" />
        </div>

        {/* {otherJobDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-base text-black my-3"
          >
            <img src={detail.icon} alt="" />
            <span>{detail.text}</span>
          </div>
        ))} */}

        <div className="flex gap-3 mt-3 items-center">
          <span>Skills:</span>
          {Skills.map((item, index) => (
            <SkillVariant key={index} skill={item.name}></SkillVariant>
          ))}
        </div>
        <Popup
          open={isOpen}
          closeOnDocumentClick={true}
          closeOnEscape={true}
          position="center center"
        >
          <ApplyJob
            onChangeTextarea={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setCoverLetter(e.target.value)
            }
            useCurrentCV={useCurrentCV}
            coverLetter={coverLetter}
            selectedCV={selectedCV}
            onChangeCV={onChangeCV}
            onChangeCurrentCV={() => setUseCurrentCV(false)}
            handleSubmit={handleSubmit}
            setCV={setCV}
            title={title}
            handleClosePopup={() => {
              setIsOpen(!isOpen);
            }}
            name={Company.name}
            isLoading={isPending}
          ></ApplyJob>
        </Popup>
      </div>
    </div>
  );
};

export default JobHeader;
