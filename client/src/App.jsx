import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Userpage from "./pages/userpage";
import Blogs from "./pages/blogs";

import Admin from "./pages/admin";
import Adminpage from "./pages/adminpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminpage" element={<Adminpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
