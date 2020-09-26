import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./src/index.css";
import DropdownFilter from "./src/components/DropdownFilter";
import UserDetailResult from "./src/components/UserDetailResult";

const HomeView = () => {
  const [filter, setFilter] = useState("select");
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5d73bf3d3300003733081869")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let temp = data.filter((data) => {
      if (filter !== "select") {
        if (filter === "20") {
          return data.age < 20;
        }
        if (filter === "21") {
          return data.age > 20 && data.age < 40;
        }
        if (filter === "40") {
          return data.age > 40;
        }
        if (filter === "all") {
          return data;
        }
      }
    });
    setFiltered(temp);
  }, [filter]);

  return (
    <div className="min-h-screen bg-main">
      <div className="flex justify-center items-center flex-col p-4">
        <h1 className="text-3xl font-bold text-yellow-800">DISTRICT MANAGER</h1>
      </div>
      <DropdownFilter filter={filter} setFilter={setFilter} />
      <UserDetailResult data={filtered} />
    </div>
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<HomeView />, mountNode);
