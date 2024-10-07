import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Userpage from "./pages/userpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/userpage" element={<Userpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
