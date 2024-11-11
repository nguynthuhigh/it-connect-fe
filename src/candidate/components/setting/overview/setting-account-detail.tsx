import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import avatar from '../../../assets/png/image_avatar.png';

interface FormData {
  name: string;
  title: string;
  email: string;
  phone: string;
  birth: Date ;
  gender: string;
  city: string;
  address: string;
  personalLink: string;
}

interface ProfileDetailsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (date: Date ) => void;
}

const AccountDetails: React.FC<ProfileDetailsProps> = ({ formData, handleChange, handleDateChange }) => (
  <div className="flex">
    <div className="w-1/4 flex flex-col items-center">
      <div className="w-32 h-32 mb-4 ">
        <img src={avatar} alt="Avatar" className="rounded-full w-full h-full object-cover border-2 border-light-grey" />
        <div className='flex justify-center'>
        <button  className="mt-2 text-blue-500 text-base font-semibold font-inter ">Edit</button>
        </div>
      </div>
    </div>
    <div className="w-3/4 pl-6 grid grid-cols-2 gap-4 font-inter">
      {[
        { label: "Name", name: "name", type: "text", value: formData.name },
        { label: "Title", name: "title", type: "text", value: formData.title },
        { label: "Email", name: "email", type: "email", value: formData.email },
        { label: "Phone", name: "phone", type: "text", value: formData.phone },
        { label: "Birth", name: "birth", component: (
          <DatePicker
            selected={formData.birth}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            className="w-full p-2 rounded-md bg-white-grey text-light-grey focus:outline-light-grey"
          />
        )
      },
        { label: "Gender", name: "gender", type: "text", value: formData.gender },
        { label: "City", name: "city", type: "text", value: formData.city },
        { label: "Address", name: "address", type: "text", value: formData.address },
        { label: "Personal link", name: "personalLink", type: "text", value: formData.personalLink }
      ].map(({ label, name, type, value, component }) => (
        <div key={name} className={name === "name" || name === "title" ? "col-span-2" : ""}>
          <label className="block text-gray-500 font-semibold">{label}</label>
          {component || (
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-white-grey text-light-grey focus:outline-light-grey font-inter"
            />
          )}
        </div>
      ))}
      <div className="mt-6 flex justify-end space-x-4">
          <button type="button" className="px-10 py-1.5 text-gray-600 font-medium font-inter">Cancel</button>
          <button type="submit" className="px-10 py-0 bg-blue-main text-white rounded-md font-medium font-inter">Save</button>
        </div>
    </div>
    
  </div>
);

export default AccountDetails;
