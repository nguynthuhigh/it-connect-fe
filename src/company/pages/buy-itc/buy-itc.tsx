import React, { ChangeEvent, useState } from "react";
import TransactionList from "../../components/analysts/list";

const PaymentForm: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("WeChat Pay");
  const [amountInITC, setAmountInITC] = useState<number | undefined>(undefined);

  const paymentMethods = ["Pointer Wallet"];
  const predefinedAmounts = [5, 10, 50, 100, 200, 500];
  const conversionRate = 1000;
  const predefinedAmountsInCurrency = predefinedAmounts.map(
    (amt) => amt * conversionRate
  );

  return (
    <div className="bg-white text-gray-900 p-6 rounded-md   mx-auto">
      <h1 className="text-lg font-bold mb-4">Buy ITC</h1>
      <div className="flex items-center gap-4 mb-4">
        {paymentMethods.map((method) => (
          <label
            key={method}
            className={`flex items-center gap-2 cursor-pointer ${
              selectedMethod === method ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <input
              type="radio"
              value={method}
              checked={selectedMethod === method}
              onChange={() => setSelectedMethod(method)}
              className="hidden"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                selectedMethod === method
                  ? "border-blue-500"
                  : "border-gray-400"
              }`}
            />
            {method}
          </label>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <input
          value={amountInITC ?? ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAmountInITC(Number(e.target.value))
          }
          placeholder="Enter amount (ITC)"
          className="bg-gray-100 text-gray-900 p-2 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600">
          Pay
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {predefinedAmounts.map((amt, index) => (
          <button
            key={amt}
            onClick={() => setAmountInITC(amt)}
            className="bg-gray-100 text-gray-900 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200"
          >
            {predefinedAmountsInCurrency[index].toLocaleString()} đ
          </button>
        ))}
      </div>
      {amountInITC && (
        <p className="mt-4 text-gray-600">
          Amount in VND:{" "}
          <span className="text-blue-500">
            {(amountInITC * conversionRate).toLocaleString()} đ
          </span>
        </p>
      )}
      <TransactionList></TransactionList>
    </div>
  );
};

export default PaymentForm;
