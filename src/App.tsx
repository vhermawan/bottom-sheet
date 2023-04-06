import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BottomSheet } from "./components/BottomSheet";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDebugMode, setIsDebugMode] = useState<boolean>(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Bottom sheet
      </button>
      <BottomSheet
        title="weeee "
        subtitle="wwwweeeee"
        isDebugMode={isDebugMode}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>asasa</div>
      </BottomSheet>
    </div>
  );
}

export default App;
