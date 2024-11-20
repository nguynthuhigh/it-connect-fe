import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  getTransactionsAPI,
  Transaction,
} from "../../services/api/analysts.api";

const TransactionList: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["transaction-history"],
    queryFn: () => getTransactionsAPI(),
  });
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
        {data?.data?.map((transaction: Transaction) => (
          <li
            key={transaction.transactionID}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-3">
              <img
                src={transaction.User.image}
                alt={transaction.User.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-sm font-medium">
                  {transaction.User.email}
                </h3>
                <p className="text-sm text-gray-500">{transaction.createdAt}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-sm text-gray-500">{transaction.description}</p>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-md ${
                  transaction.type === "post"
                    ? "bg-blue-100 text-blue-600"
                    : transaction.type === "deposit"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {transaction.type}
              </span>
              <span
                className={`text-sm font-medium ${
                  transaction.amount ? "text-green-600" : "text-red-600"
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
