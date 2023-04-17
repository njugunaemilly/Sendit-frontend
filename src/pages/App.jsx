import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";


function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
