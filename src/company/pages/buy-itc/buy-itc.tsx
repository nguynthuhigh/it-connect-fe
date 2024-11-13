import React, { ChangeEvent, FormEvent, useState } from "react";
import CurrencyInput from "react-currency-input-field";

const DepositPage: React.FC = () => {
  const [amount, setAmount] = useState<number>();
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const balance = 1000;
  const conversionRate = 100;

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };
  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nạp ${amount} ITC với phương thức ${paymentMethod}`);
  };

  return (
    <div className=" min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Nạp tiền vào ví
        </h2>
        <div className="text-gray-600 text-center mb-6">
          <p>
            Số dư hiện tại: <span className="font-bold">{balance} $ITC</span>
          </p>
          <p>
            Tỉ lệ quy đổi:{" "}
            <span className="font-bold">1 $ITC = {conversionRate} VNĐ</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số tiền cần nạp ($ITC)
            </label>
            <CurrencyInput
              value={amount}
              onValueChange={handleAmountChange}
              placeholder="Nhập số tiền cần nạp"
              prefix="đ"
              decimalsLimit={2}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phương thức thanh toán
            </label>
            <div className="mt-2 space-y-2">
              {["PayPal", "Stripe", "Pointer Wallet"].map((method) => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={handlePaymentMethodChange}
                    className="form-radio text-blue-600 h-4 w-4"
                  />
                  <span className="text-gray-700">{method}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Nạp tiền
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepositPage;
