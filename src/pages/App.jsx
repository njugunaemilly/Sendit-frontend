import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";


function App() {
  return (
    <div >
      <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
