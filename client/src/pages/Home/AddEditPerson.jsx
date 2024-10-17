import React, { useEffect, useState } from "react";
import InputOfForm from "../../components/InputOfForm";
import { useDispatch, useSelector } from "react-redux";
import { createPerson, updatePerson } from "../../features/PeopleSlice";
import { useNavigate } from "react-router-dom";
import {creatingPerson,editingPerson} from "../../utils/personApis"

const AddEditPerson = () => {
  const personData = useSelector((state) => state.currentPerson);
  const type = useSelector((state) => state.type); 

  const [formValues, setFormValues] = useState({
    firstName:  "",
    middleName: "",
    lastName: "",
    email: "",
    description:"",
    dateOfBirth:  "",
    isMale:false,
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addPerson = async() => {
    const response = await creatingPerson(formValues)
    dispatch(createPerson({ person: response }));
  };

  const editPerson = async () => {
    const response=await editingPerson(personData._id, formValues)
    dispatch(updatePerson({ person: response}));
  };

  const handleSubmit = (e) => {  
    e.preventDefault();

    if (type === "add") {
      addPerson();
      navigate("/");
    } else if (type === "edit") {
      editPerson();
      navigate("/");
    } else {
      console.warn("Unknown form submission type");
    }
    // Reset form
    setFormValues({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      description: "",
      dateOfBirth: "",
      isMale: false,
    });
  };
  useEffect(() => {
    if (type === "edit" && personData) {
      setFormValues({...personData,dateOfBirth:""});
    }
  }, [type, personData]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-10 pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {type === "add" ? "Add" : "Edit"} New Person
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* First Name */}
            <InputOfForm
              handleChange={handleChange}
              label={"First Name"}
              value={formValues.firstName}
              name={"firstName"}
              type="text"
            />
            {/* Middle Name */}
            <InputOfForm
              handleChange={handleChange}
              label={"Middle Name"}
              value={formValues.middleName}
              name={"middleName"}
              type="text"
            />
            {/* Last Name */}
            <InputOfForm
              handleChange={handleChange}
              label={"Last Name"}
              value={formValues.lastName}
              name={"lastName"}
              type="text"
            />
            {/* Email */}
            <InputOfForm
              handleChange={handleChange}
              label={"Email"}
              value={formValues.email}
              name={"email"}
              type="email"
            />
            {/* Date of Birth */}
            <InputOfForm
              handleChange={handleChange}
              label={"Date of Birth"}
              value={formValues.dateOfBirth}
              name={"dateOfBirth"}
              type="date"
            />
            {/* Gender (isMale) */}
            <div className="flex items-center mt-6 md:mt-0">
              <input
                type="checkbox"
                name="isMale"
                checked={formValues.isMale}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-gray-700">Male</label>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formValues.description}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {type === "add" ? "Add Person" : "Edit Person"}
            </button>
          </div>
          {/* Back Button */}
          <div>
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition duration-300"
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditPerson;
