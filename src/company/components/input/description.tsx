import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface DescriptionProps {
  title: string;
  name: string;
  onChange: (html: string, name: string) => void;
  value?: string;
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  name,
  value,
  onChange,
  className,
}) => {
  const handleEditorChange = (html: string) => {
    onChange(html, name);
  };

  return (
    <div className={`${className} b-16"`}>
      <label className="font-semibold text-gray-main">{title}</label>
      <ReactQuill
        value={value}
        onChange={handleEditorChange}
        placeholder="Enter description..."
        theme="snow"
        className="h-32 mt-2"
      />
    </div>
  );
};

export default Description;
