import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Userpage from "./pages/userpage";
import Blogs from "./pages/blogs";
import AboutUs from "./pages/aboutus";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
