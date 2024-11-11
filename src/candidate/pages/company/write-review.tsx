import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface StarRatingProps {
  name: string;
  onChange: (rating: number) => void;
  value?: number;
}

const StarRating = ({ name, onChange, value = 0 }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(value);

  const getRatingLabel = (rating: number) => {
    switch (rating) {
      case 1:
        return 'Terrible';
      case 2:
        return 'Needs Improvement';
      case 3:
        return 'Good';
      case 4:
        return 'Really Good';
      case 5:
        return 'Fantastic';
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            className="p-1 focus:outline-none"
            onMouseEnter={() => setHoverRating(rating)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => {
              setSelectedRating(rating);
              onChange(rating);
            }}
          >
            <svg
              className={`w-6 h-6 ${
                rating <= (hoverRating || selectedRating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          </button>
        ))}
      </div>
      <div className="text-sm text-gray-600 min-w-[140px] whitespace-nowrap overflow-hidden text-ellipsis">
        {getRatingLabel(hoverRating || selectedRating)}
      </div>
    </div>
  );
};

const CompanyReviewForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    overallRating: 0,
    summary: '',
    overtimePolicy: '',
    overtimeReason: '',
    lovesWorking: '',
    suggestion: '',
    salaryRating: 0,
    trainingRating: 0,
    managementRating: 0,
    cultureRating: 0,
    officeRating: 0,
    recommend: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Review MB</h2>
            <p className="text-sm text-gray-600">
              It only takes you 1 minute to complete this review form. Your opinion will be very helpful for the Developer
              community who are looking for a job.
            </p>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Overall rating <span className="text-red-500">*</span>
            </label>
            <StarRating 
              name="overallRating" 
              onChange={(rating) => setFormData(prev => ({ ...prev, overallRating: rating }))}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Summary <span className="text-red-500">*</span>
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              placeholder='Summary'
              className="w-full border rounded-md p-2 text-sm"
              rows={3}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">
              How do you feel about the overtime policy? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="overtimePolicy"
                  value="satisfied"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Satisfied
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="overtimePolicy"
                  value="unsatisfied"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Unsatisfied
              </label>
            </div>
            <textarea
              name="overtimeReason"
              value={formData.overtimeReason}
              onChange={handleInputChange}
              placeholder="Input your reason"
              className="w-full border rounded-md p-2 mt-2 text-sm"
              rows={3}
            />
            <p className="text-xs text-gray-500 mt-1">Limit from 50 to 145 characters</p>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              What makes you love working here <span className="text-red-500">*</span>
            </label>
            <textarea
              name="lovesWorking"
              value={formData.lovesWorking}
              onChange={handleInputChange}
              placeholder='Input your experience'
              className="w-full border rounded-md p-2 text-sm"
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-1">Limit from 50 to 10000 characters</p>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Suggestion for improvement <span className="text-red-500">*</span>
            </label>
            <textarea
              name="suggestion"
              value={formData.suggestion}
              onChange={handleInputChange}
              placeholder='Input your suggestion'
              className="w-full border rounded-md p-2 text-sm"
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-1">Limit from 50 to 10000 characters</p>
          </div>
          <div>
            <label className="block mb-4 font-medium">
              Rating detail <span className="text-red-500">*</span>
            </label>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Salary & benefits</span>
                <StarRating 
                  name="salaryRating" 
                  onChange={(rating) => setFormData(prev => ({ ...prev, salaryRating: rating }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Training & learning</span>
                <StarRating 
                  name="trainingRating" 
                  onChange={(rating) => setFormData(prev => ({ ...prev, trainingRating: rating }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Management cares about me</span>
                <StarRating 
                  name="managementRating" 
                  onChange={(rating) => setFormData(prev => ({ ...prev, managementRating: rating }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Culture & fun</span>
                <StarRating 
                  name="cultureRating" 
                  onChange={(rating) => setFormData(prev => ({ ...prev, cultureRating: rating }))}
                />
              </div>
              <div className="flex justify-between items-center">
                <span>Office & workspace</span>
                <StarRating 
                  name="officeRating" 
                  onChange={(rating) => setFormData(prev => ({ ...prev, officeRating: rating }))}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Do you want to recommend this company to your friends ? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="recommend"
                  value="yes"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="recommend"
                  value="no"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Review Guidelines & Conditions</h3>
            <p className="text-sm text-gray-600 mb-2">
              In order for a review to be displayed on the website, it must adhere to the Guidelines & Conditions for reviews.
            </p>
            <p className="text-sm font-medium mb-2">Please ensure that:</p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li>Do not use offensive or derogatory language</li>
              <li>Do not provide personal information</li>
              <li>Do not provide confidential or proprietary business information</li>
            </ul>
          </div>

          <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors">
            Send Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyReviewForm;