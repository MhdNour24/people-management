import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPeople } from "../features/PeopleSlice";
import { getAllPeople } from "../utils/personApis";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const people = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const fetchedPeople = await getAllPeople();
      console.log(fetchedPeople);
      if (fetchedPeople) {
        dispatch(setPeople({ people: fetchedPeople })); // تحديث الـ store
      }
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  // Function to handle clearing the search field
  const clearSearchValue = () => {
    setSearchValue("");
    if(isSearch) {
      fetchData();
    }
  };

  const searchForValueFunc = () => {
    // Function logic for searching
    const searchedPeople = [];
    for (const element of people) {
      if (element.firstName.includes(searchValue.trim())) {
        searchedPeople.push(element);
      } else if (element.lastName.includes(searchValue.trim())) {
        searchedPeople.push(element);
      } else if (element.email.includes(searchValue.trim())) {
        searchedPeople.push(element);
      }
    }
    dispatch(setPeople({ people: searchedPeople }));
    setIsSearch(true);
  };

  return (
    <header
      className="flex shadow-md py-4 px-4 sm:px-10 bg-[#3a3f4b] text-white
      font-[sans-serif] min-h-[80px] tracking-wide sticky top-0 z-10 min-w-full"
    >
      <div className="flex flex-wrap justify-between items-center gap-5 w-full">
        <img
          src="https://readymadeui.com/readymadeui.svg"
          alt="logo"
          className="w-40 max-lg:mr-5"
        />

        <div id="collapseMenu" className="lg:!flex lg:ml-auto">
          <div className="flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search something..."
              className="w-full text-sm bg-transparent outline-none pr-2"
            />
            <div className="flex gap-2 text-white">
              {searchValue && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="cursor-pointer fill-red-600"
                  onClick={clearSearchValue}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 8.586l-4.95-4.95a1 1 0 00-1.414 1.414L8.586 10l-4.95 4.95a1 1 0 001.414 1.414L10 11.414l4.95 4.95a1 1 0 001.414-1.414L11.414 10l4.95-4.95a1 1 0 00-1.414-1.414L10 8.586z" />
                </svg>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-600"
                onClick={searchForValueFunc}
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
