import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  people: [],
  type: "add",
  currentPerson: null,
};
export const slice = createSlice({
  name: "people",
  initialState: initialValues,
  reducers: {
    createPerson: (state, action) => {
      const data = action.payload.person;
      state.people.push(data);
    },
    updatePerson: (state, action) => {
      const id = action.payload.person._id;
      const updatedPeople = state.people.map((person) => {
        if (person._id === id) {
          return action.payload.person;
        } else {
          return person;
        }
      });
      state.people = updatedPeople;
    },
    deletePerson: (state, action) => {
      state.people = state.people.filter(
        (person) => person._id !== action.payload.person._id
      );
    },
    changeType: (state, action) => {
      state.type = action.payload.type;
    },
    setCurrentPerson: (state, action) => {
      state.currentPerson = action.payload.person;
    },
    setPeople: (state, action) => {
      state.people = action.payload.people;
    },
  },
});

export const {
  createPerson,
  updatePerson,
  deletePerson,
  changeType,
  setCurrentPerson,
  setPeople,
} = slice.actions;
export default slice.reducer;
