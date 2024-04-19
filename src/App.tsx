
import {
  Routes,
  Route,

} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Leavegrp from "./pages/Leavegrp";
import Joingrp from "./pages/Joingrp";

function App() {
  
 

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
