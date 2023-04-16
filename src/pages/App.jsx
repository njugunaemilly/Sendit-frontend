import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";


function App() {
  return (
    <div >
      <Routes>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
