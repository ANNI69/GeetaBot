import { useState } from "react";
import "./App.css";
import ChatBot from "./Chat";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <ChatBot/> */}
      <div>
        <ChatBot />
      </div>
    </>
  );
}

export default App;
