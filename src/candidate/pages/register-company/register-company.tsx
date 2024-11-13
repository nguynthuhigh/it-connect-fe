import Input from '../../../shared/components/input-pattern/input';
import ImageBanner from '../../assets/png/banner_register.png';
import { Select } from 'antd';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageMap from '../../assets/png/map.png';

const RegisterCompany = () => {
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className=' h-screen pb-[1350px]'>
      <div className="flex relative flex-col items-center h-max">
        <div className="relative w-full h-[200px] sm:h-[300px] text-center flex flex-col">
          <img src={ImageBanner} alt="Banner" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#3694ff] opacity-90"></div>
          <div className="relative z-10 text-white mt-12 sm:mt-16">
            <div className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-2">Contact us</div>
            <div className="text-sm sm:text-base">IT connected is ready to provide the right solution <br className="hidden sm:block" /> according to your needs</div>
          </div>
        </div>

        <div className="bg-white absolute top-[180px] sm:top-[200px] rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-[95%] sm:max-w-[1100px] mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Register Company</h3>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <Input name={'text'} title={'Company name'} placeholder={'IT Connected'} />
              </div>

              <div>
                <Input name={'text'} title={'Website'} placeholder={'https://www.facebook.com/phuczu13'} />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label className="text-[#757575] font-semibold">Industry</label>
                  <Select
                    placeholder="IT Product"
                    className="w-full placeholder-[#757575] placeholder-[16px] mt-1 h-[50px]"
                    onChange={handleChange}
                    options={[
                      { value: 'AT', label: 'AT Product' },
                      { value: 'BT', label: 'BT Product' },
                      { value: 'CT', label: 'CT Product' },
                    ]}
                  />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label className="text-[#757575] font-semibold">Country</label>
                <Select
                  placeholder="Select Country"
                  className="w-full placeholder-[#757575] mt-1 placeholder-[16px] h-[50px]"
                  onChange={handleChange}
                  options={[
                    { value: 'Viet Nam', label: 'Viet Nam' },
                    { value: 'Manchester', label: 'Manchester' },
                    { value: 'United', label: 'United' },
                  ]}
                />
              </div>

              <div>
                <Input name={'text'} title={'Working Day'} placeholder={'ex: Monday to Friday'} />
              </div>

              <div>
                <Input name={'text'} title={'Overtime policy'} placeholder={'ex: No OT'} />
              </div>

              <div>
                <Input name={'text'} title={'Company size'} placeholder={'ex: 50 to 100 people'} />
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <label className="text-[#757575] font-semibold">Company Description</label>
              <ReactQuill className="rounded-xl mt-2" theme="snow" value={value} onChange={setValue} />
            </div>

            <div className="mt-4 sm:mt-6">
              <label className="text-[#757575] font-semibold">Company Skill</label>
              <ReactQuill className="rounded-xl mt-2" theme="snow" value={value} onChange={setValue} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="w-full">
                <Input name={'text'} title={'Address'} placeholder={'828 Su Van Hanh, District 10'} />
              </div>
              <div className="flex flex-col">
                <label className="text-[#757575] font-semibold">Select location in map</label>
                <img src={ImageMap} alt="Map" className="mt-1 w-full sm:w-auto" />
              </div>
            </div>

            <div className="col-span-3 flex justify-center mt-6 sm:mt-10">
              <button type="submit" className="bg-blue-500 text-white rounded-md py-2 sm:py-2 px-8 sm:px-10 hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
