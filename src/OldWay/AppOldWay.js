import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//Pages Import
import Home from "../pages/Home";
import About from "../pages/About";


const AppOldWay = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobrouter</h1> 
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppOldWay
