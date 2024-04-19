import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Leavegrp from "./pages/Leavegrp";
import Joingrp from "./pages/Joingrp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
 

  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/logged" element={<Leavegrp/>} />
      <Route
        path="/logged-join"
        element={<Joingrp />}
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/signin"
        element={<SignIn/>}
      />
    </Routes>
  );
}
export default App;
