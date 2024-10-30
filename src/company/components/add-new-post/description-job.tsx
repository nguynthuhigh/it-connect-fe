import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface DescriptionJobProps {
  title: string;
}

const DescriptionJob: React.FC<DescriptionJobProps> = ({ title }) => {
  const [editorHtml, setEditorHtml] = useState<string>(''); 

  const handleEditorChange = (html: string) => {
    setEditorHtml(html);
  };

  return (
    <div className="mb-16"> 
      <label className="block font-semibold text-gray-main mb-4">
        {title}
      </label>
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        placeholder="Enter description..."
        theme="snow"
        className="h-32" 
      />
    </div>
  );
};

export default DescriptionJob;
