import { Sidebar } from "../../../shared/components/sidebar/sidebar";
import IconFilter from '../../assets/svg/iconFilter.svg'
import IconSearchCL from '../../assets/svg/iconSearchCL.svg'
import IconAddNew from '../../assets/svg/iconAddnew.svg'
import IconPrevios from '../../assets/svg/iconPrevious.svg'
import IconNext from '../../assets/svg/iconNext.svg'
import ListCompany from "../../components/company/list-company";

const CompanyList = () => {
  return (
    <div>
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="w-full p-4">
                <h1 className="text-2xl font-semibold mb-6">Company List</h1>
                <div className="rounded-lg ">
                    <div className="flex justify-between mb-4">
                        <div className="flex gap-3">
                            <button className="max-h-[42px] hover:border-[#2F80ED] px-3 py-2 rounded-md items-center gap-2 flex border border-gray-300">
                                <img src={IconFilter} alt="" />
                                <span className='text-[#464F60]'>Sort by</span>
                            </button>
                            <div className="flex max-h-[42px] items-center gap-2 hover:border-[#2F80ED] border border-gray-300 rounded-md px-4 w-72">
                                <img className="w-4 h-4" src={IconSearchCL} alt="" />
                                <input
                                type="text"
                                placeholder="Search company here"
                                className="py-2 w-full focus:outline-none"
                                />
                            </div>
                        </div>
                        <button className="bg-[#2F80ED] max-h-[42px] gap-2 flex items-center text-white py-2 px-4 rounded-md">
                            <img className="h-3 w-3" src={IconAddNew} alt="" />
                            <span>Add new</span>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse bg-white">
                            <thead className="bg-gray-100">
                            <tr className="">
                                <th className="px-4 py-3 border">#</th>
                                <th className="px-2 py-3 border">Logo</th>
                                <th className="px-4 py-3 border text-start">Name</th>
                                <th className="px-4 py-3 border text-start">Description</th>
                                <th className="px-4 py-3 border">Industry</th>
                                <th className="px-4 py-3 border">Country/ID</th>
                                <th className="px-4 py-3 border">Join Date</th>
                                <th className="px-4 py-3 border">Status</th>
                                <th className="px-4 py-3 border ">Action</th>
                            </tr>
                            </thead>
                            < ListCompany />
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="flex justify-center mb-5">
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
  );
};

export default CompanyList;