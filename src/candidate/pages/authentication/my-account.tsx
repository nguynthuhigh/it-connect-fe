import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Input from '../../../shared/components/input-pattern/input';
import VisibleIcon from "../../assets/svg/visible_eye.svg";
import InvisibleIcon from "../../assets/svg/invisible_eye.svg";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleConfirmNewPasswordVisibility = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };

    const saveInfor = () => {
        toast.success("Saved information successfully");
    }

    const updatePassword = () => {
        toast.success("Password changed successfully");
    }

    return(
        <div className='max-w-[1200px] w-full mx-auto mt-10'>
        <Tabs>
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Reviews</Tab>
                <Tab>Change password</Tab>
            </TabList>

            <TabPanel className='1 mt-5'>
            <div className='flex w-full'>
                <div className='w-1/4 mt-2 p-5 h-fit flex flex-col items-center'>
                    <img className='w-[90px] h-[90px] rounded-full' src="https://i.pinimg.com/564x/e6/7e/43/e67e4330a26a11b2071924920d85df5d.jpg" alt='img'>
                    </img>
                    <button className='mt-4 text-[#0094df] hover:ring flex justify-center border-[#0094df] border px-2 w-fit'>
                            Edit
                    </button>
                </div>
                <div className='w-3/4 p-5'>
                    <div>
                        <Input
                            placeholder="Your name"
                            name="text"
                            title="Name"
                            className="w-full max-w-[553px]"
                            >
                        </Input>
                    </div>
                    <div className='mt-[18px]'>
                        <Input
                            placeholder="My name is pzu13"
                            name="text"
                            title="Title"
                            className="w-full max-w-[553px]"
                            >
                        </Input>
                    </div>

                    <div className='mt-[18px] grid grid-cols-2 max-w-[553px] gap-y-[18px] gap-x-8'>
                        <Input
                            placeholder="example@gmail.com"
                            name="email"
                            title="Email"
                            className="w-full max-w-[553px]"
                            >
                        </Input>
                        <Input
                            placeholder="0122 456 789"
                            name="phone"
                            title="Phone"
                            className="w-full max-w-[260px]"
                            >
                        </Input>
                        <Input
                            placeholder="22/02/2004"
                            name="birth"
                            title="Birth"
                            className="w-full max-w-[260px]"
                            >
                        </Input>
                        <Input
                            placeholder="Male"
                            name="gender"
                            title="Gender"
                            className="w-full max-w-[260px]"
                            >
                        </Input>
                        <Input
                            placeholder="Quang Ngai City"
                            name="text"
                            title="Title"
                            className="w-full max-w-[260px]"
                            >
                        </Input>
                        <Input
                            placeholder="142 Phan Van Dong, P. Nghia..."
                            name="address"
                            title="Address"
                            className="w-full max-w-[260px]"
                            >
                        </Input>
                    </div>

                    <div className='mt-[18px]'>
                        <Input
                            placeholder="https://www.facebook.com/phuczu13/"
                            name="src"
                            title="Personal link"
                            className="w-full max-w-[553px]"
                            >
                        </Input>
                        <div className='space-x-2 mt-10 flex justify-end w-full max-w-[553px]'>
                            <button className='bg-slate-200 hover:bg-slate-300 h-[38px] px-10'>
                                Cancel
                            </button>
                            <button onClick={saveInfor} className='bg-[#0094df] hover:ring text-white h-[38px] px-10'>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel className='2 '>
            <div>
                Tab Reviews
            </div>
            </TabPanel>

            <TabPanel className="3 w-full mt-10 max-w-[600px] mx-auto">
                <div>
                    <div className="mt-5 relative">
                    <label className="text-[16px] sm:text-[20px] font-semibold">Current Password</label>
                    <input
                        id="currentpassword"
                        name="currentpassword"
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="block w-full h-[50px] sm:h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
                        placeholder="Enter current password"
                    />
                    <img
                        src={showCurrentPassword ? InvisibleIcon : VisibleIcon}
                        alt="Toggle Password Visibility"
                        className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-[36px] sm:mt-12 cursor-pointer"
                        onClick={toggleCurrentPasswordVisibility}
                    />
                    </div>

                    <div className="mt-5 relative">
                    <label className="text-[16px] sm:text-[20px] font-semibold">New Password</label>
                    <input
                        id="newpassword"
                        name="newpassword"
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="block w-full h-[50px] sm:h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
                        placeholder="Enter new password"
                    />
                    <img
                        src={showNewPassword ? InvisibleIcon : VisibleIcon}
                        alt="Toggle Password Visibility"
                        className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-[36px] sm:mt-12 cursor-pointer"
                        onClick={toggleNewPasswordVisibility}
                    />
                    </div>

                    <div className="mt-5 relative">
                    <label className="text-[16px] sm:text-[20px] font-semibold">Confirm New Password</label>
                    <input
                        id="confirmnewpassword"
                        name="confirmnewpassword"
                        type={showConfirmNewPassword ? 'text' : 'password'}
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="block w-full h-[50px] sm:h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
                        placeholder="Confirm new password"
                    />
                    <img
                        src={showConfirmNewPassword ? InvisibleIcon : VisibleIcon}
                        alt="Toggle Password Visibility"
                        className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-[36px] sm:mt-12 cursor-pointer"
                        onClick={toggleConfirmNewPasswordVisibility}
                    />
                    </div>
                    <div className='space-x-2 mt-10 flex justify-center w-full'>
                        <button className='bg-slate-200 hover:bg-slate-300 h-[38px] px-10'>
                            Cancel
                        </button>
                        <button 
                            onClick={updatePassword}
                            type='submit' 
                            className='bg-[#0094df] hover:ring text-white h-[38px] px-10'
                        >
                            Update
                        </button>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
        <ToastContainer />
    </div>
    );
}
export default MyAccount