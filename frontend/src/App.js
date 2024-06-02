import "./App.css";
import {Route, Routes} from "react-router-dom";
import Start from "./layouts/start/Start";
import CreateTest from "./layouts/createTests/CreateTest";
import EditTest from "./layouts/editTest/EditTest";
import Statistics from "./layouts/statistics/Statistics";
import SignIn from "./layouts/auth/signIn/SignIn";
import SignUp from "./layouts/auth/signUp/SignUp";

function App() {

    return (
        <>

  <Routes>
      <Route path={"/"} element={<SignIn />}/>
      <Route path={"/signUp"} element={<SignUp />}/>
      <Route path="/start" element={<Start />} />
      <Route path="/creatTest" element={<CreateTest />} />
      <Route path="/editTest" element={<EditTest />} />
      <Route path="/statistics" element={<Statistics />} />
  </Routes>

        </>
    )
}

export default App;
