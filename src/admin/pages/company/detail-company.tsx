import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import ListEmployee from '../../components/company/list-employee'

import IconPrevios from '../../assets/svg/iconPrevious.svg'
import IconNext from '../../assets/svg/iconNext.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ImageMap from '../../assets/png/map.png'
import { Button, DatePicker } from 'antd';
// import ListTransaction from "../../components/company/list-transaction";

const DetailCompany = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0); // Lưu tab hiện tại

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const banCompany = () => {
        toast.success('Chặn Công Ty này thành công!');
    }

    return (
        <div className="w-full">
            <ToastContainer/>
            <div className="w-full p-4">
                <div className="relative h-[140px] bg-gradient-to-r from-[#A8C8FD] to-[#D880EB] rounded-md">
                    <div className="absolute top-20 left-8 flex items-center gap-4">
                        <img 
                            src="https://i.pinimg.com/564x/c2/09/81/c209813118018201df7bdbf5c27923be.jpg" 
                            alt="ITC Company Logo" 
                            className="w-[125px] h-[125px] rounded-md border"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div className="ml-[170px] mt-[9px]">
                        <h1 className="text-2xl font-semibold ">IT Connect Company FLC</h1>
                        <p className="text-gray-500">IT Company</p>
                    </div>

                    <button 
                        className=" bg-red-500 max-h-[50px] mt-2 text-white px-4 py-2 rounded-md"
                        onClick={openModal}
                    >
                        Ban Company
                    </button>
                </div>

                <Tabs className='mt-5' selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
                    <TabList className='flex border-b-2 gap-4 border-blue-500'>
                        <Tab className={`border-b-2 outline-none ${selectedTab === 0 ? 'border-blue-500' : 'border-transparent'}`}>
                            Information
                        </Tab>
                        <Tab className={`border-b-2 outline-none ${selectedTab === 1 ? 'border-blue-500' : 'border-transparent'}`}>
                            Employee
                        </Tab>
                        <Tab className={`border-b-2 outline-none ${selectedTab === 2 ? 'border-blue-500' : 'border-transparent'}`}>
                            Transactions
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="w-full">
                            <div className=" p-4 justify-center gap-4 flex">
                                <div className="bg-white w-[400px] p-4 mt-4 border rounded-md shadow-lg">
                                    <h3 className="text-lg font-semibold mb-2">Information</h3>
                                    <p className="justify-between flex"><strong>Phone:</strong> +84 123 321 321</p>
                                    <p className="justify-between flex"><strong>ID:</strong> #84 - Viet Nam</p>
                                    <p className="justify-between flex"><strong>Description:</strong> IT Fe Company</p>
                                    <p className="justify-between flex"><strong>Industry:</strong> Web programming</p>
                                    <p className="justify-between flex"><strong>Website:</strong> www.itconnect.com.vn</p>
                                    <p className="justify-between flex"><strong>Email:</strong> itccompany@vippro.com</p>
                                    <p className="justify-between flex"><strong>Size:</strong> 25 Candidate</p>
                                    <p className="justify-between flex"><strong>Working day:</strong> 5 days per week</p>
                                </div>
                                <div className=" justify-center flex-row">
                                <p className="font-bold italic text-[#7F8394] mt-4 mb-2">Location</p>

                                    <p className="font-semibold text-[#8B8C91] w-[420px] bg-[#D7EAFD] py-2 px-4">Su Van Hanh, District 10, Ho Chi Minh</p>
                                    {/* <img src={ImageMap} alt="Map" /> */}
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className='mt-8'>
                        <div>
                            <div className="overflow-x-auto table-auto border-collapse">
                                <div className="flex justify-between mb-6">
                                    <div className="w-[150px] h-[40px] font-semibold text-[#0094FF] flex justify-center rounded-md items-center border border-[#0094FF]">
                                        List Employee
                                    </div>

                                    <div>
                                        <input className="w-[150px] h-[40px] rounded-md border-[#9F9999] placeholder-[#9F9999] border px-5" type="text" name="" id="" placeholder="Search here"/>
                                    </div>
                                </div>

                                <table className="w-full">
                                    <thead className="">
                                        <tr className="bg-gray-100">
                                            <th className="px-4 border text-start py-2">ID</th>
                                            <th className="px-4 border text-start py-2">Name</th>
                                            <th className="px-4 border text-start py-2">Email</th>
                                            <th className="px-4 border text-start py-2">Status</th>
                                            <th className="px-4 border text-start py-2">Action</th>
                                        </tr>
                                    </thead>
                                    {/* < ListEmployee/> */}
                                </table>

                                <div className="flex justify-center my-10">
                                    <div className="flex gap-5">
                                        <button className="px-3 py-1 border rounded-lg">
                                            <img src={IconPrevios} alt="" />
                                        </button>
                                        <button className="px-3 py-1 border-[#2F80ED] border bg-[#2F80ED] text-white rounded-lg">1</button>
                                        <button className="px-3 py-1 border rounded-lg">2</button>
                                        <button className="px-3 py-1 border rounded-lg">3</button>
                                        <span className="px-3 py-1">...</span>
                                        <button className="px-3 py-1 border rounded-lg">10</button>
                                        <button className="px-3 py-1 border rounded-lg">
                                            <img src={IconNext} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className='mt-8'>
                        <div className="overflow-x-auto table-auto border-collapse">
                            <div className="w-[175px] mb-6 h-[40px] font-semibold text-[#0094FF] flex justify-center rounded-md items-center border border-[#0094FF]">
                                Transaction History
                            </div>
                            <div className="">
                                <div className="flex gap-2">
                                    <Button type="primary">Search</Button>
                                    <DatePicker placeholder="Select Date" />
                                </div>
                                <div className="overflow-auto mt-4">
                                    <table className="w-full">
                                        <thead className="">
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border text-start">#</th>
                                                <th className="py-2 px-4 border text-start">Transaction ID</th>
                                                <th className="py-2 px-4 border text-start">Made By</th>
                                                <th className="py-2 px-4 border text-start">Description</th>
                                                <th className="py-2 px-4 border text-start">Created Date</th>
                                                <th className="py-2 px-4 border text-start">Amount</th>
                                                <th className="py-2 px-4 border text-start">Status</th>
                                                <th className="py-2 px-4 border text-start">Action</th>
                                            </tr>
                                        </thead>
                                        {/* <ListTransaction/> */}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-md">
                        <h2 className="text-xl font-semibold mb-4 text-center">Are you sure to ban this company?</h2>
                        <p className="mb-6">Please confirm if you want to ban ITC Company.</p>
                        <div className="flex justify-center gap-4">
                            <button
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                                onClick={banCompany}
                            >
                                Ban Company
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailCompany;
