import Input from "../../../shared/components/input-pattern/input";
import ImageBanner from "../../assets/png/banner_register.png";
import { FormEvent, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import industryData from "../../../shared/dummy-data/industry.json";
import Button from "../../components/button/button";
import CustomSelect from "../../../company/components/input/select";
import Description from "../../../company/components/input/description";
import { useMutation } from "@tanstack/react-query";
import { registerCompanyAPI } from "../../services/api/company.api";
import { getCookie } from "../../../shared/utils/cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorWithResponse } from "../../types/error";
interface ICompany {
  name?: string;
  country?: string;
  website?: string;
  industry?: string;
  working_day?: string;
  ot_policy?: string;
  size?: string;
  description?: string;
  skill_description?: string;
  address?: string;
}

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState<ICompany>();

  const handleChange = (value: string, name: string) => {
    setRegisterData({ ...registerData, [name]: value });
  };
  useEffect(() => {
    const token = getCookie("at-itc");
    if (!token) {
      return;
    }
  }, []);
  const { mutate, data } = useMutation<{ message: string }>({
    mutationKey: ["register-company"],
    mutationFn: async () => {
      return await registerCompanyAPI(registerData);
    },
    onSuccess: () => {
      toast.success(data?.message);
      navigate("/company");
    },
    onError: (e: unknown) => {
      const error = e as ErrorWithResponse;
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(registerData);
    mutate();
  };
  return (
    <div className=" h-screen pb-[1550px] sm:pb-[1350px]">
      <div className="flex relative flex-col items-center h-fit">
        <div className="relative w-full h-[200px] sm:h-[300px] text-center flex flex-col">
          <img
            src={ImageBanner}
            alt="Banner"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#3694ff] opacity-90"></div>
          <div className="relative text-white mt-12 sm:mt-16">
            <div className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-2">
              Contact us
            </div>
            <div className="text-sm sm:text-base">
              IT connected is ready to provide the right solution{" "}
              <br className="hidden sm:block" /> according to your needs
            </div>
          </div>
        </div>

        <div className="bg-white absolute top-[180px] sm:top-[200px] rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-[95%] sm:max-w-[1100px] mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
            Register Company
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Input
                name={"name"}
                title={"Company name"}
                onChange={(e) => {
                  setRegisterData({ ...registerData, name: e.target.value });
                }}
                placeholder={"IT Connected"}
              />
              <Input
                name={"website"}
                title={"Website"}
                onChange={(e) => {
                  setRegisterData({ ...registerData, website: e.target.value });
                }}
                placeholder={"https://www.example.com"}
              />
              <CustomSelect
                name="industry"
                title="Industry"
                options={industryData}
                onChange={handleChange}
              ></CustomSelect>
              <CustomSelect
                name="country"
                title="Country"
                options={[
                  { value: "China", label: "China" },
                  { value: "India", label: "India" },
                  { value: "Japan", label: "Japan" },
                  { value: "South Korea", label: "South Korea" },
                  { value: "Indonesia", label: "Indonesia" },
                  { value: "Vietnam", label: "Vietnam" },
                  { value: "Thailand", label: "Thailand" },
                  { value: "Malaysia", label: "Malaysia" },
                  { value: "Singapore", label: "Singapore" },
                  { value: "Philippines", label: "Philippines" },
                  { value: "Bangladesh", label: "Bangladesh" },
                  { value: "Pakistan", label: "Pakistan" },
                  { value: "Sri Lanka", label: "Sri Lanka" },
                  { value: "Nepal", label: "Nepal" },
                  { value: "Cambodia", label: "Cambodia" },
                  { value: "Myanmar", label: "Myanmar" },
                  { value: "Laos", label: "Laos" },
                  { value: "Brunei", label: "Brunei" },
                  { value: "Mongolia", label: "Mongolia" },
                  { value: "Maldives", label: "Maldives" },
                ]}
                onChange={handleChange}
              ></CustomSelect>
              <Input
                name={"working_day"}
                title={"Working Day"}
                placeholder={"ex: Monday to Friday"}
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    working_day: e.target.value,
                  });
                }}
              />
              <Input
                name={"ot_policy"}
                title={"Overtime policy"}
                placeholder={"ex: No OT"}
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    ot_policy: e.target.value,
                  });
                }}
              />
              <Input
                name={"size"}
                title={"Company size"}
                placeholder={"ex: 50 to 100 people"}
                onChange={(e) => {
                  setRegisterData({ ...registerData, size: e.target.value });
                }}
              />
            </div>

            <Description
              className="mt-5"
              name="description"
              value={registerData?.description || " "}
              title="Description"
              onChange={handleChange}
            ></Description>
            <Description
              className="mt-14"
              name="skill_description"
              value={registerData?.skill_description || " "}
              title="Company skill"
              onChange={handleChange}
            ></Description>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="w-full">
                <Input
                  className="mt-10"
                  name={"address"}
                  title={"Address"}
                  placeholder={"828 Su Van Hanh, District 10"}
                  onChange={(e) => {
                    setRegisterData({
                      ...registerData,
                      address: e.target.value,
                    });
                  }}
                />
              </div>
              {/* <div className="flex flex-col">
                <label className="text-[#757575] font-semibold">
                  Select location in map
                </label>
                <img
                  src={ImageMap}
                  alt="Map"
                  className="mt-1 w-full sm:w-auto"
                />
              </div> */}
            </div>

            <div className="mt-5">
              <Button name="Submit"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
