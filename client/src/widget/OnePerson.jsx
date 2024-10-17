import React from "react";
import { Button } from "@mui/material";

const OnePerson = ({
  firstName,
  middleName,
  lastName,
  description,
  date,
  gender,
  onEdit,
  onDelete,
}) => {

  return (
    <div className="bg-[#2c3e50] duration-300 rounded-lg shadow-lg mb-4 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="text-white mb-4">
        <h3 className="text-2xl font-bold">
          {firstName} {lastName}
        </h3>
        <p className="text-sm italic text-gray-400">{middleName}</p>
        <p className="text-gray-300 line-clamp-1">{description}</p>
      </div>
      <div className="text-gray-200 mb-4">
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Gender:</strong> {gender ? "male" : "female"}
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="contained"
          color="primary"
          onClick={onEdit}
          className="hover:bg-blue-700 transition duration-200"
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onDelete}
          className="hover:bg-red-700 transition duration-200"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default OnePerson;
