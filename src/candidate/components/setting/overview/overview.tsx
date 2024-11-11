import React, { useState } from 'react';
import AccountDetails from './setting-account-detail'; // Đường dẫn file đến AccountDetails

const Overview: React.FC = () => {
  // Khởi tạo state cho form data
  const [formData, setFormData] = useState({
    name: 'Nhat Minh',
    title: 'Like to sleep',
    email: 'abc123@gmail.com',
    phone: '0123456789',
    birth: new Date(),
    gender: 'Male',
    city: 'Ho Chi Minh',
    address: '828 Đ. Sư Vạn HạnhPhường 12, Quận 10, Hồ Chí Minh',
    personalLink: 'https://www.facebook.com',
  });

  // Hàm xử lý khi input thay đổi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Hàm xử lý khi ngày sinh thay đổi
  const handleDateChange = (date: Date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birth: date,
    }));
  };

  return (
        <div className='w-full max-w-4xl p-6 bg-white shadow-xl rounded-md'>
        <h1 className="text-2xl font-bold mb-6 font-inter">Overview</h1>
        <AccountDetails 
          formData={formData} 
          handleChange={handleChange} 
          handleDateChange={handleDateChange} 
        />
      </div>
  );
};

export default Overview;
