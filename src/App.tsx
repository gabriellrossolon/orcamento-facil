import { Routes, Route } from "react-router-dom";
import Budget from "./components/Budget";
import FinalizedForm from "./components/FinalizedForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Budget />} />
        <Route path="/finalized" element={<FinalizedForm />} />
      </Routes>
    </>
  );
};

export default App;
