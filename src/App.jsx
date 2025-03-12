import "./App.scss";
import Header from "./components/header/Header";
import MainSection from "./components/header/MainSection";
import { useRef, useState, useEffect } from "react";
import Body from "./components/Body/Body";
function App() {
  return (
    <>
      <Header />
      <MainSection />
      <Body />
    </>
  );
}

export default App;
