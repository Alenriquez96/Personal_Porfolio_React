import React from "react";
import Social from "./Social";
import AboutMe from "./AboutMe";
import Biography from "./Biography";
import Description from "./Description";
import Projects from "./Projects";
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<AboutMe/>} path="/about_me"/>
        <Route element={<Projects/>} path="/projects"/>
      </Routes>
      <Social/>
      <Biography/>
      <Description/>
    </main>
  )
};

export default Main;
