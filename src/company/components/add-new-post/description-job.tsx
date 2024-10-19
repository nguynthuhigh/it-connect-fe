import React from 'react';

interface DescriptionJobProps {
  title: string;
}

const DescriptionJob: React.FC<DescriptionJobProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold text-gray-main mb-2">
        {title}
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Description title..."
        rows={5} // Thay đổi số hàng nếu cần
      />
    </div>
  );
};

export default DescriptionJob;
