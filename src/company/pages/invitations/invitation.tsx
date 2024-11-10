import IconFilter from "../../assets/svg/iconFilter.svg";
import IconSearchCL from "../../assets/svg/iconSearchCL.svg";
import { Pagination } from "antd"; // Importing Pagination from antd
import { useState } from "react";
import ListInvitations from "../../components/list-invitations/list-invitations";

// Dữ liệu giả lập (sử dụng dữ liệu này thay vì gọi API trong thực tế)
export const APPLY_STATUS = {
    PENDING: "Pending",
    EXPIRE: "Expire",
    ACCEPTED: "Accepted",
    REJECT: "Reject",
  };
  
  const listInvitations = [
    {
      userID: 1,
      name: "Alice Johnson",
      email: "alice.j@gmail.com",
      status: "active",
      photo: null,
      description: "Frontend Developer specializing in Vue.js.",
      joinDate: "05-09-2024 10:20",
      ApplyJob: {
        message: "Looking forward to this opportunity!",
        status: APPLY_STATUS.PENDING,
        cv: "https://example.com/cv1.jpg",
        createdAt: "2024-11-01T10:35:57.127Z",
        jobID: 5
      }
    },
    {
      userID: 2,
      name: "Bob Smith",
      email: "bob.smith@gmail.com",
      status: "inactive",
      photo: null,
      description: "Backend Developer with experience in Django.",
      joinDate: "12-10-2024 15:10",
      ApplyJob: {
        message: "Excited to join the team.",
        status: APPLY_STATUS.EXPIRE,
        cv: "https://example.com/cv2.jpg",
        createdAt: "2024-11-02T10:35:57.127Z",
        jobID: 6
      }
    },
    {
      userID: 3,
      name: "Catherine Green",
      email: "catherine.g@gmail.com",
      status: "active",
      photo: null,
      description: "Data Scientist with Python and R expertise.",
      joinDate: "02-11-2024 09:30",
      ApplyJob: {
        message: "I bring strong analytical skills.",
        status: APPLY_STATUS.ACCEPTED,
        cv: "https://example.com/cv3.jpg",
        createdAt: "2024-11-03T10:35:57.127Z",
        jobID: 7
      }
    },
    {
      userID: 4,
      name: "David Lee",
      email: "david.lee@gmail.com",
      status: "inactive",
      photo: null,
      description: "Fullstack Developer with JavaScript focus.",
      joinDate: "11-10-2024 14:20",
      ApplyJob: {
        message: "Eager to contribute to the team.",
        status: APPLY_STATUS.REJECT,
        cv: "https://example.com/cv4.jpg",
        createdAt: "2024-11-04T10:35:57.127Z",
        jobID: 8
      }
    },
    {
      userID: 5,
      name: "Eleanor Brown",
      email: "eleanor.b@gmail.com",
      status: "active",
      photo: null,
      description: "Project Manager with Agile experience.",
      joinDate: "10-09-2024 12:15",
      ApplyJob: {
        message: "I excel at managing complex projects.",
        status: APPLY_STATUS.PENDING,
        cv: "https://example.com/cv5.jpg",
        createdAt: "2024-11-05T10:35:57.127Z",
        jobID: 9
      }
    },
    {
      userID: 6,
      name: "Frank Thompson",
      email: "frank.t@gmail.com",
      status: "inactive",
      photo: null,
      description: "Mobile Developer with Flutter experience.",
      joinDate: "11-11-2024 10:00",
      ApplyJob: {
        message: "Hope to contribute to mobile development.",
        status: APPLY_STATUS.EXPIRE,
        cv: "https://example.com/cv6.jpg",
        createdAt: "2024-11-06T10:35:57.127Z",
        jobID: 10
      }
    },
    {
      userID: 7,
      name: "Grace Wilson",
      email: "grace.w@gmail.com",
      status: "active",
      photo: null,
      description: "UI/UX Designer with Figma and Adobe skills.",
      joinDate: "15-08-2024 16:00",
      ApplyJob: {
        message: "Creative solutions are my specialty.",
        status: APPLY_STATUS.ACCEPTED,
        cv: "https://example.com/cv7.jpg",
        createdAt: "2024-11-07T10:35:57.127Z",
        jobID: 11
      }
    },
    {
      userID: 8,
      name: "Henry White",
      email: "henry.w@gmail.com",
      status: "inactive",
      photo: null,
      description: "DevOps Engineer with AWS and Docker skills.",
      joinDate: "22-10-2024 18:40",
      ApplyJob: {
        message: "Experienced in scalable infrastructure.",
        status: APPLY_STATUS.REJECT,
        cv: "https://example.com/cv8.jpg",
        createdAt: "2024-11-08T10:35:57.127Z",
        jobID: 12
      }
    },
    {
      userID: 9,
      name: "Isabel Martinez",
      email: "isabel.m@gmail.com",
      status: "active",
      photo: null,
      description: "Fullstack Developer with a passion for coding.",
      joinDate: "05-10-2024 11:30",
      ApplyJob: {
        message: "Ready to tackle challenges.",
        status: APPLY_STATUS.PENDING,
        cv: "https://example.com/cv9.jpg",
        createdAt: "2024-11-09T10:35:57.127Z",
        jobID: 13
      }
    },
    {
      userID: 10,
      name: "Jack Black",
      email: "jack.b@gmail.com",
      status: "inactive",
      photo: null,
      description: "Network Engineer with CCNA certification.",
      joinDate: "15-10-2024 09:00",
      ApplyJob: {
        message: "I have a strong network administration background.",
        status: APPLY_STATUS.EXPIRE,
        cv: "https://example.com/cv10.jpg",
        createdAt: "2024-11-10T10:35:57.127Z",
        jobID: 14
      }
    },
    {
      userID: 11,
      name: "Katie Brown",
      email: "katie.b@gmail.com",
      status: "active",
      photo: null,
      description: "Digital Marketing Specialist.",
      joinDate: "20-10-2024 15:00",
      ApplyJob: {
        message: "Excited to leverage my marketing skills.",
        status: APPLY_STATUS.ACCEPTED,
        cv: "https://example.com/cv11.jpg",
        createdAt: "2024-11-11T10:35:57.127Z",
        jobID: 15
      }
    },
    {
      userID: 12,
      name: "Leo Green",
      email: "leo.g@gmail.com",
      status: "inactive",
      photo: null,
      description: "Cybersecurity Analyst.",
      joinDate: "23-10-2024 11:15",
      ApplyJob: {
        message: "Security is my passion.",
        status: APPLY_STATUS.REJECT,
        cv: "https://example.com/cv12.jpg",
        createdAt: "2024-11-12T10:35:57.127Z",
        jobID: 16
      }
    },
    {
      userID: 13,
      name: "Molly Davis",
      email: "molly.d@gmail.com",
      status: "active",
      photo: null,
      description: "Product Manager with experience in tech.",
      joinDate: "02-11-2024 10:30",
      ApplyJob: {
        message: "Driven by innovation and impact.",
        status: APPLY_STATUS.PENDING,
        cv: "https://example.com/cv13.jpg",
        createdAt: "2024-11-13T10:35:57.127Z",
        jobID: 17
      }
    },
    {
      userID: 14,
      name: "Nathan Brown",
      email: "nathan.b@gmail.com",
      status: "inactive",
      photo: null,
      description: "System Administrator.",
      joinDate: "11-11-2024 09:20",
      ApplyJob: {
        message: "I'm skilled in system maintenance.",
        status: APPLY_STATUS.EXPIRE,
        cv: "https://example.com/cv14.jpg",
        createdAt: "2024-11-14T10:35:57.127Z",
        jobID: 18
      }
    },
    {
      userID: 15,
      name: "Olivia Scott",
      email: "olivia.s@gmail.com",
      status: "active",
      photo: null,
      description: "SEO Specialist.",
      joinDate: "15-11-2024 10:45",
      ApplyJob: {
        message: "SEO is my expertise.",
        status: APPLY_STATUS.ACCEPTED,
        cv: "https://example.com/cv15.jpg",
        createdAt: "2024-11-15T10:35:57.127Z",
        jobID: 19
      }
    },
    {
      userID: 16,
      name: "Paul Young",
      email: "paul.y@gmail.com",
      status: "inactive",
      photo: null,
      description: "Content Writer with marketing experience.",
      joinDate: "05-12-2024 10:15",
      ApplyJob: {
        message: "Words are my playground.",
        status: APPLY_STATUS.REJECT,
        cv: "https://example.com/cv16.jpg",
        createdAt: "2024-11-16T10:35:57.127Z",
        jobID: 20
      }
    },
    // ... More entries as needed
  ];
  
  

const Invitation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Cập nhật dữ liệu khi phân trang
  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Lọc dữ liệu dựa trên trang hiện tại và pageSize
  const currentData = listInvitations.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="flex">
        <div className="w-full p-4">
          <h1 className="text-2xl font-semibold mb-6">Invitations</h1>
          <div className="rounded-lg">
            <div className="flex justify-between mb-4">
              <div className="flex gap-3">
                <button className="max-h-[42px] hover:border-[#2F80ED] px-5 py-2 rounded-md items-center gap-2 flex border border-gray-300">
                  <img src={IconFilter} alt="" />
                </button>
                <div className="flex max-h-[42px] items-center gap-2 hover:border-[#2F80ED] border border-gray-300 rounded-md px-4 w-72">
                  <img className="w-4 h-4" src={IconSearchCL} alt="" />
                  <input
                    type="text"
                    placeholder="Search by email"
                    className="py-2 w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-2 py-3">Photo</th>
                    <th className="px-4 py-3 text-start">Name</th>
                    <th className="px-4 py-3 text-start">Description</th>
                    <th className="px-4 py-3">Applied Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <ListInvitations invitations={currentData} />
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Pagination Component from antd */}
      <div className="flex justify-center mb-5">
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          total={listInvitations.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Invitation;
