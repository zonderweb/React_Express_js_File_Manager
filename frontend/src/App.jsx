import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {},
      );
  }, []);

  return <></>;
}

export default App;

// https://youtu.be/-l3KdDWrKQY?si=2Fus5KBA0z4HCOiC&t=1900
