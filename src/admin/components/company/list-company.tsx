const listCompany = [
    {
        id: 1,
        name: "ITConnect Company",
        location: "Ho Chi Minh, Viet Nam",
        description: "Using technology like ReactJS, NodeJS, NextJS, ...",
        industry: "FullStack",
        countryId: "#84 - Viet Nam",
        joinDate: "15-10-2024",
        status: "Active",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 2,
        name: "TechHub",
        location: "Ha Noi, Viet Nam",
        description: "Specialized in AI and Blockchain solutions",
        industry: "AI/Blockchain",
        countryId: "#83 - Viet Nam",
        joinDate: "01-11-2024",
        status: "Inactive",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 3,
        name: "ITConnect Company",
        location: "Ho Chi Minh, Viet Nam",
        description: "Using technology like ReactJS, NodeJS, NextJS, ...",
        industry: "FullStack",
        countryId: "#84 - Viet Nam",
        joinDate: "15-10-2024",
        status: "Active",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 4,
        name: "TechHub",
        location: "Ha Noi, Viet Nam",
        description: "Specialized in AI and Blockchain solutions",
        industry: "AI/Blockchain",
        countryId: "#83 - Viet Nam",
        joinDate: "01-11-2024",
        status: "Inactive",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 5,
        name: "ITConnect Company",
        location: "Ho Chi Minh, Viet Nam",
        description: "Using technology like ReactJS, NodeJS, NextJS, ...",
        industry: "FullStack",
        countryId: "#84 - Viet Nam",
        joinDate: "15-10-2024",
        status: "Active",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 6,
        name: "TechHub",
        location: "Ha Noi, Viet Nam",
        description: "Specialized in AI and Blockchain solutions",
        industry: "AI/Blockchain",
        countryId: "#83 - Viet Nam",
        joinDate: "01-11-2024",
        status: "Inactive",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 7,
        name: "ITConnect Company",
        location: "Ho Chi Minh, Viet Nam",
        description: "Using technology like ReactJS, NodeJS, NextJS, ...",
        industry: "FullStack",
        countryId: "#84 - Viet Nam",
        joinDate: "15-10-2024",
        status: "Active",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 8,
        name: "TechHub",
        location: "Ha Noi, Viet Nam",
        description: "Specialized in AI and Blockchain solutions",
        industry: "AI/Blockchain",
        countryId: "#83 - Viet Nam",
        joinDate: "01-11-2024",
        status: "Inactive",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 9,
        name: "ITConnect Company",
        location: "Ho Chi Minh, Viet Nam",
        description: "Using technology like ReactJS, NodeJS, NextJS, ...",
        industry: "FullStack",
        countryId: "#84 - Viet Nam",
        joinDate: "15-10-2024",
        status: "Active",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
    {
        id: 10,
        name: "TechHub",
        location: "Ha Noi, Viet Nam",
        description: "Specialized in AI and Blockchain solutions",
        industry: "AI/Blockchain",
        countryId: "#83 - Viet Nam",
        joinDate: "01-11-2024",
        status: "Inactive",
        logo: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/461185481_1058397005800455_8112413207197525059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s0m5LenacggQ7kNvgEOQqH8&_nc_zt=23&_nc_ht=scontent.fsgn5-13.fna&_nc_gid=ACsXHvsPd3OJd03y2w9QDvJ&oh=00_AYAw3qf8BhqdgmygbSvTQBh6A8aBm94wiWTgz5yoQmi0QQ&oe=671C5A75"
    },
];

const ListCompany = () => {
    return (
        <tbody>
            {listCompany.map((company, i) => (
                <tr key={company.id} className="border-t">
                    <td className="px-4 py-3 text-center">{i + 1}</td>
                    <td className="px-2 py-3 text-center">
                        <img
                            src={company.logo}
                            alt="Company Logo"
                            className="w-10 h-10 mx-auto rounded-full"
                        />
                    </td>
                    <td className="px-4 py-3 text-left">
                        <span className="font-semibold">{company.name}</span>
                        <br />
                        <span className="text-gray-500 text-sm">{company.location}</span>
                    </td>
                    <td className="px-4 py-3 text-left">
                        {company.description}
                    </td>
                    <td className="px-4 py-3 text-center">{company.industry}</td>
                    <td className="px-4 py-3 text-center">{company.countryId}</td>
                    <td className="px-4 py-3 text-center">{company.joinDate}</td>
                    <td className="px-4 py-3 text-center">
                        <span
                            className={`py-1 px-3 rounded-full font-medium text-sm ${
                                company.status === "Active" ? "bg-[#BAFFCF] text-[#0D7420]" : "bg-[#FFD8D8] text-[#FF1100]"
                            }`}
                        >
                            {company.status}
                        </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                        <button className="text-white bg-[#2F80ED] rounded-md px-3 py-2 max-h-10">View more</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default ListCompany;