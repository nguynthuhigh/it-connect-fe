import React from "react";

type Transaction = {
  id: number;
  name: string;
  date: string;
  type: "Job Post" | "Deposit" | "Withdraw"; // Change status to type of transaction
  amount: string;
  avatar: string; // Image URL
};

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Bessie Cooper",
    date: "02 July, 2023",
    type: "Job Post",
    amount: "+ 50 ITC",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    date: "02 July, 2023",
    type: "Deposit",
    amount: "+ 100 ITC",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Ronald Richards",
    date: "02 July, 2023",
    type: "Withdraw",
    amount: "- 30 ITC",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Cody Fisher",
    date: "02 July, 2023",
    type: "Deposit",
    amount: "+ 200 ITC",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Floyd Miles",
    date: "02 July, 2023",
    type: "Withdraw",
    amount: "- 150 ITC",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    date: "02 July, 2023",
    type: "Deposit",
    amount: "+ 500 ITC",
    avatar: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: 7,
    name: "Guy Hawkins",
    date: "02 July, 2023",
    type: "Withdraw",
    amount: "- 400 ITC",
    avatar: "https://i.pravatar.cc/40?img=7",
  },
];

const TransactionList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full ">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-200 rounded-md">
            Newest
          </button>
          <button className="px-3 py-1 text-sm bg-gray-200 rounded-md">
            Oldest
          </button>
        </div>
      </div>
      <ul className="divide-y divide-gray-200 mt-4">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-3">
              <img
                src={transaction.avatar}
                alt={transaction.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-medium">{transaction.name}</h3>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span
                className={`text-sm font-medium px-2 py-1 rounded-md ${
                  transaction.type === "Job Post"
                    ? "bg-blue-100 text-blue-600"
                    : transaction.type === "Deposit"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {transaction.type}
              </span>
              <span
                className={`text-sm font-medium ${
                  transaction.amount.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.amount}
              </span>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
