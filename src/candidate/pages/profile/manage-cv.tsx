import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface CVFile {
  name: string;
  lastUploaded: string;
  isDefault: boolean;
}

const CVUploadForm = () => {
  const [cv, setCV] = useState<CVFile | null>({
    name: 'my-cv.docx',
    lastUploaded: new Date().toLocaleDateString(),
    isDefault: true
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCV({
        name: file.name,
        lastUploaded: new Date().toLocaleDateString(),
        isDefault: true
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Manage CVs</h2>
          <p className="text-gray-600 text-sm mb-6">
            Upload your CV below to use it throughout your application process
          </p>

          {cv && (
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {/* Simple document icon using HTML/CSS */}
                    <div className="w-6 h-6 relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-sm"></div>
                      <div className="absolute top-2 left-1 right-1 h-px bg-blue-50"></div>
                      <div className="absolute top-4 left-1 right-1 h-px bg-blue-50"></div>
                      <div className="absolute top-6 left-1 right-2 h-px bg-blue-50"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Your own CV</h3>
                    <p className="text-sm text-gray-500">{cv.name}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Last uploaded: {cv.lastUploaded}
                    </p>
                  </div>
                </div>
                {cv.isDefault && (
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Default
                  </span>
                )}
              </div>
            </div>
          )}

          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleUpload}
              accept=".doc,.docx,.pdf"
              className="hidden"
            />
            <button
              onClick={triggerFileInput}
              className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
            >
              <Upload className="w-4 h-4 mr-1" />
              Upload new
              <span className="text-gray-400 ml-1">
                (Use .doc, .docx or pdf files, 3mb and no password protected)
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVUploadForm;