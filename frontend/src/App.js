import "./App.css";
import {Route, Routes, Navigate} from "react-router-dom";
import StartTest from "./layouts/start/StartTest";
import CreateTest from "./layouts/createTests/CreateTest";
import EditTest from "./layouts/editTest/EditTest";
import Statistics from "./layouts/statistics/Statistics";
import SignIn from "./layouts/auth/signIn/SignIn";
import SignUp from "./layouts/auth/signUp/SignUp";


function App() {

    return (
        <>

  <Routes>
      <Route path={"/login"} element={<SignIn />}/>
      <Route path={"/signUp"} element={<SignUp />}/>
      <Route path="/startTest" element={<StartTest />} />
      <Route path="/creatTest" element={<CreateTest />} />
      <Route path="/editTest" element={<EditTest />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="*" element={<Navigate to="/login" />} />
  </Routes>

        </>
    )
}

export default App;
