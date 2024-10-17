import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddEditPerson from "./pages/Home/AddEditPerson";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/addEditPerson" element={<AddEditPerson></AddEditPerson>} />
      </Routes>
    </div>
  );
}

export default App;
