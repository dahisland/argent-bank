import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Profile from "./pages/profile/Profile";
import Transactions from "./pages/transactions/Transactions";
import Error404 from "./pages/error404/Error404";

/**
 * Component React containing routes paths
 * @component
 */
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route
          path="/transactions/:accountID"
          element={<Transactions />}
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
