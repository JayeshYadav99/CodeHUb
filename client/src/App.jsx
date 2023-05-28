import { useState } from "react";
import Home from "./Pages/Home";

// import Profile from "./Pages/Profile";

// import "../style/App.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Footer2 from "./Pages/Footer2";
import Repo from "./Pages/Repo";
import Github from "./Pages/Github";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeHome from "./Pages/CodeHome";
import CertificationCourses from "./Pages/Learn/CertificationCourses";
import Articles from "./Pages/Practice/Articles";
import Problem from "./Pages/Practice/Problem";
const App = () => {
  return (
    <div>
      <div className="overflow-y-auto">
        <>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<CodeHome />}></Route>
            <Route exact path="/Repo" element={<Repo />}></Route>
            <Route exact path="/Github" element={<Github />}></Route>
            <Route exact path="/Problem" element={<Problem />}></Route>

            <Route
              exact
              path="/CertiCourse"
              element={<CertificationCourses />}
            ></Route>
            <Route exact path="/Articles" element={<Articles />}></Route>
          </Routes>

          <Footer2 />
        </>
      </div>
    </div>
  );
};

export default App;
