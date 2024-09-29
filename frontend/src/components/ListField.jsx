import React from "react";

const ListField = ({ label, arr }) => {
  return (
    <div className="flex  gap-3">
      <h2 className="font-semibold mb-3">{label}: </h2>

      <div className="flex flex-wrap gap-3">
        {arr.map((i) => (
          <span key={i} className="p-2 rounded-full  font-semibold bg-gray-200">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ListField;
