import Input from '../../../shared/components/input-pattern/input';
import ImageBanner from '../../assets/png/banner_register.png'
import { Select, Space } from 'antd';
import  { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageMap from '../../assets/png/map.png'

const RegisterCompany = () => {
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex relative flex-col items-center">
      <div className="relative w-full h-[300px] text-center flex flex-col">
        <img src={ImageBanner} alt="Banner" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#3694ff] opacity-90"></div>
        <div className="relative z-10 text-white mt-16">
          <div className="text-3xl font-semibold mb-2">Contact us</div>
          <div>IT connected is ready to provide the right solution <br /> according to your needs</div>
        </div>
      </div>
      <div className="bg-white absolute top-[220px] rounded-lg shadow-lg p-8 w-full max-w-[1100px]">
        <h3 className="text-2xl font-bold text-center mb-6">Register Company</h3>
        <div className=''>
          <form className="">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div>
                <Input name={'text'} title={'Company name'} placeholder={'IT Connected'} />
              </div>

              <div>
                <Input name={'text'} title={'Website'} placeholder={'1xbet.com'} />
              </div>

              <div className='flex flex-col justify-start items-start'>
                <label htmlFor="" className='text-[#757575] font-semibold'>Industry</label>
                <Space wrap>
                  <Select
                    placeholder='IT Product'
                    className='w-[329.33px] placeholder-[#757575] placeholder-[16px] h-[50px]'
                    onChange={handleChange}
                    options={[
                      { value: 'AT', label: 'AT Product' },
                      { value: 'BT', label: 'BT Product' },
                      { value: 'CT', label: 'CT Product' },
                    ]}
                  />
                </Space>
              </div>

              <div className='flex flex-col justify-start items-start'>
                <label htmlFor="" className='text-[#757575] font-semibold'>Country</label>
                <Select
                  placeholder='IT Product'
                  className='w-[329.33px] placeholder-[#757575] placeholder-[16px] h-[50px]'
                  onChange={handleChange}
                  options={[
                    { value: 'Viet Nam', label: 'Viet Nam' },
                    { value: 'Ohio', label: 'Ohio' },
                    { value: 'Yamate', label: 'Yamate' },
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
                  
            <div className='mt-6'>
              <label htmlFor="" className='text-[#757575] font-semibold'>Company Description</label>
              <ReactQuill className='rounded-xl' theme="snow" value={value} onChange={setValue}/>
            </div>

            <div className='mt-6'>
              <label htmlFor="" className='text-[#757575] font-semibold'>Company Skill</label>
              <ReactQuill className='rounded-xl' theme="snow" value={value} onChange={setValue}/>
            </div>

            <div className='flex gap-6 mt-6'>
              <div className='w-full'>
                <Input name={'text'} title={'Address'} placeholder={'828 Su Van Hanh, District 10'} />
              </div>
              <div>
                <label htmlFor="" className='text-[#757575] font-semibold'>Select location in map</label>
                <img src={ImageMap} alt="" />
              </div>
            </div>

            <div className="col-span-3 flex justify-center mt-10">
              <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-10 hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
