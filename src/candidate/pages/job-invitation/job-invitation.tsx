import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobInvitation = () => {
  return (
    <div className=''>
        <div className='bg-[#f6f6f6]'>
            <h1 className="text-4xl  max-w-[1250px] mx-auto font-bold py-5">Job Invitation</h1>
            <p className='text-[22px] max-w-[1250px] mx-auto'>
                ITConnect provides a service that connects anonymous candidates with suitable job opportunities. Learn more about Job Invitation here.
            </p>
            
            <Tabs className='mt-5   '>
                <TabList className="border-b max-w-[1250px] mx-auto space-x-8 border-gray-300 flex">
                    <Tab
                        className="flex gap-2 focus:outline-none py-2 cursor-pointer text-lg font-medium group" 
                        selectedClassName="border-b-2 border-[#FF1717] text-[#FF1717]"
                        >
                        <p>Pending</p>
                        <span className="bg-[#DEDEDE] px-2 rounded-full group-focus-within:bg-[#FF1717] group-focus-within:text-white">
                            0
                        </span>
                    </Tab>
                    <Tab
                        className="flex gap-2 focus:outline-none py-2 cursor-pointer text-lg font-medium group" 
                        selectedClassName="border-b-2 border-[#FF1717] text-[#FF1717]"
                        >
                        <p>Accepted</p>
                        <span className="bg-[#DEDEDE] px-2 rounded-full group-focus-within:bg-[#FF1717] group-focus-within:text-white">
                            0
                        </span>
                    </Tab>
                    <Tab
                        className="flex gap-2 focus:outline-none py-2 cursor-pointer text-lg font-medium group" 
                        selectedClassName="border-b-2 border-[#FF1717] text-[#FF1717]"
                        >
                        <p>Expired</p>
                        <span className="bg-[#DEDEDE] px-2 rounded-full group-focus-within:bg-[#FF1717] group-focus-within:text-white">
                            0
                        </span>
                    </Tab>
                </TabList>
                <TabPanel className='pt-5 bg-white'>
                    <div className='max-w-[1250px] mx-auto'>
                        <div className='text-[18px]'>
                            <div className='flex pb-5 justify-between'>
                                <div className="">
                                    This tab stores valid invitations, where you can review job details and decide to share your CV.
                                </div>
                                <div>
                                    Sort by:
                                </div>
                            </div>
                            <div className='bg-[#f6f6f6] h-[400px] w-full'>
                                <div className='text-[18px] justify-center h-full items-center flex'>
                                    You have 0 Pending invitation
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className='bg-white'>
                    <div className='max-w-[1250px] mx-auto'>
                        <div className='text-[18px]'>
                            <div className='flex pb-5 justify-between'>
                                <div className="">
                                    This tab keeps track of invitations you’ve agreed to share your CV for, and the employer will contact you soon.
                                </div>
                                <div>
                                    Sort by:
                                </div>
                            </div>
                            <div className='bg-[#f6f6f6] h-[400px] w-full'>
                                <div className='text-[18px] justify-center h-full items-center flex'>
                                    You have 0 Accepted invitation
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className='pb-10 bg-white'>
                    <div className='max-w-[1250px] mx-auto'>
                        <div className='text-[18px]'>
                            <div className='flex pb-5 justify-between'>
                                <div className="">
                                    This tab holds invitations that have lapsed.
                                </div>
                                <div>
                                    Sort by:
                                </div>
                            </div>
                            <div className='bg-[#f6f6f6] h-[400px] w-full'>
                                <div className='text-[18px] justify-center h-full items-center flex'>
                                    You have 0 Expired invitation
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default JobInvitation