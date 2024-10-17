import React from "react";
import OnePerson from "./OnePerson";
import { useDispatch } from "react-redux";
import {deletePerson,changeType,setCurrentPerson} from "../features/PeopleSlice"
import { useNavigate } from "react-router-dom";
import {deletingPerson} from "../utils/personApis"
import { useSelector } from "react-redux";

const ListOfPeople = () => {
  const people = useSelector((state) => state.people);

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const handleEdit=(person)=>{
    dispatch(changeType({type:"edit"}))
    dispatch(setCurrentPerson({ person }));
    navigate("/addEditPerson")
  } 
  const handleDelete=async(person)=>{
    const response = await deletingPerson(person._id)
    dispatch(deletePerson({person:response}))
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {people.map((person) => {
        return (
          <OnePerson
            key={person._id} 
            firstName={person.firstName}
            middleName={person.middleName}
            lastName={person.lastName}
            description={person.description}
            date={person.dateOfBirth}
            gender={person.isMale}
            onEdit={()=>handleEdit(person)}
            onDelete={()=>handleDelete(person)}
            />
        );
      })}
    </div>
  );
};

export default ListOfPeople;
