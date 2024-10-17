import React, { useEffect } from "react";
import ListOfPeople from "./ListOfPeople";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {changeType} from "../features/PeopleSlice"
import { getAllPeople } from "../utils/personApis";
import {setPeople} from "../features/PeopleSlice"

const SectionListOfPeople = () => {
  const navigate=useNavigate()
  const dispatch= useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPeople = await getAllPeople(); 
        console.log(fetchedPeople)
        if (fetchedPeople) {
          dispatch(setPeople({ people: fetchedPeople })); // تحديث الـ store
        }
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    };

      fetchData();
  }, [dispatch]);
  return (
    <div className="backgroundBody">
      <div className="w-5/6 bg-[#34495e] p-10 rounded-lg mt-10">
        <h1 className="font-bold text-center text-4xl mb-10 text-white bg-clip-text bg-gradient-to-r transition-transform duration-300 hover:scale-105">
          Our People
        </h1>{" "}
        <ListOfPeople></ListOfPeople>
        <div className="flex justify-center items-center pt-10">
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#4a90e2",
              color: "#fff",
              "&:hover": { backgroundColor: "#357ABD" },
            }}
            onClick={()=>{
              dispatch(changeType({type:"add"}))
              navigate("addEditPerson")
            }}
          >
            add person
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionListOfPeople;
