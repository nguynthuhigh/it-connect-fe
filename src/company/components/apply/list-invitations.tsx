interface ApplyJob {
    message: string;
    status: string;
    cv: string;
    createdAt: string;
    jobID: number;
  }
  
  interface Invitation {
    userID: number;
    name: string;
    email: string;
    status: string;
    photo: string | null; // photo có thể là null
    description: string;
    joinDate: string;
    ApplyJob: ApplyJob;
  }
  
  interface ListInvitationsProps {
    invitations: Invitation[];
  }
  
  const ListInvitations: React.FC<ListInvitationsProps> = ({ invitations }) => {
    return (
      <tbody>
        {invitations.map((invitation, i) => (
          <tr key={invitation.userID} className="border-t">
            <td className="px-4 py-3 text-center">{i + 1}</td>
            <td className="px-2 py-3 text-center">
              <img
                src={invitation.photo || ""} 
                alt="Invitation"
                className="w-10 h-10 mx-auto rounded-full"
              />
            </td>
            <td className="px-4 py-3 text-left">
              <span className="font-semibold">{invitation.name}</span>
              <br />
              <span className="text-gray-500 text-sm">{invitation.email}</span>
            </td>
            <td className="px-4 py-3 text-left">{invitation.description}</td>
            <td className="px-4 py-3 text-center">{invitation.joinDate}</td>
            <td className="px-4 py-3 text-center">
                <span
                    className={`py-1 px-3 rounded-full font-medium text-sm ${
                    invitation.ApplyJob.status === "Accepted" ? "bg-[#BAFFCF] text-[#0D7420]" :
                    invitation.ApplyJob.status === "Expire" ? "bg-[#FFD9D9] text-[#FF0000]" :
                    invitation.ApplyJob.status === "Pending" ? "bg-[#FFFBE0] text-[#FEE105]" :
                    invitation.ApplyJob.status === "Reject" ? "bg-[#E2E4FF] text-[#5C21FF]" : ""
                    }`}
                >
                    {invitation.ApplyJob.status}
                </span>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="text-white bg-[#2F80ED] rounded-md px-3 py-2 max-h-10">View CV</button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };
  
  export default ListInvitations;
  