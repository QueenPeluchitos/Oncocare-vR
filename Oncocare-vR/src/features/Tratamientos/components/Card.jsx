import React from 'react';

const Card = ({ category, date, title, description, author }) => {
  return (
    <div className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
      <div className="bg-white rounded border border-gray-300">
        <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
        <div className="p-4">
          <div className="flex items-center text-sm">
            <span className="text-teal-500 font-semibold">{category}</span>
            <span className="ml-4 text-gray-600">{date}</span>
          </div>
          <p className="text-lg font-semibold leading-tight mt-4">{title}</p>
          <p className="text-gray-600 mt-1">{description}</p>
          <div className="flex items-center mt-4">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
            <div className="ml-4">
              <p className="text-gray-600">
                By <span className="text-gray-900 font-semibold">{author}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
