import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./components/Heading";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="bg-gray-300 dark:bg-neutral-800 w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="md:w-[30vw] w-auto h-auto flex flex-col items-center justify-center m-3  rounded-3xl">
          <Heading />
          <Question />
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
