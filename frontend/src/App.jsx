import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [parent, setParent] = useState("");
  const [data, setData] = useState({
    path: "",
    files: [],
  });

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then(
        (result) => {
          setParent("");
          setData(result);
        },
        (error) => {},
      );
  }, []);

  function clickHandler(e) {
    e.preventDefault();
    // console.log(e.target.attributes.href.value);
    fetch("http://localhost:8000/?path=" + e.target.attributes.href.value)
      .then((res) => res.json())
      .then(
        (result) => {
          let linkArr = result.path.split("/");
          // console.log(linkArr);
          linkArr.pop();
          setParent(linkArr.join("/"));
          setData(result);
        },
        (error) => {},
      );
  }

  return (
    <div className="file-manager">
      <div>
        <a href={parent} onClick={clickHandler}>
          Level Up
        </a>
      </div>
      <div className="current-level">
        current: <span>{data.path === "" ? "/" : data.path}</span>
      </div>
      <ul className="folder-list">
        {data.files.map((item) => {
          if (item.dir) {
            return (
              <li key={item.name} className="folder">
                <a href={data.path + "/" + item.name} onClick={clickHandler}>
                  <i className="fa-solid fa-folder"></i>
                  {item.name.toUpperCase()}
                </a>
              </li>
            );
          } else {
            return (
              <li key={item.name} className="file">
                <i className="fa-solid fa-file"></i>
                {item.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default App;
