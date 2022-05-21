import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", { foodName: foodName, days: days });
  };

  return (
    <div className='App'>
      <h1>CRUD app with MERN</h1>
      <label> Food name:</label>
      <input
        type='text'
        onChange={(event) => {
          setFoodName(event.target.value);
        }}
      />
      <label> Days since you ate it:</label>
      <input
        type='number'
        onChange={(event) => {
          setDays(event.target.value);
        }}
      />
      <button onClick={addToList}>Add to list!</button>

      <hr />
      <h2>Food list</h2>

      {foodList.map((val, key) => {
        return (
          <div key={key} className='food'>
            <h4>Food name: {val.foodName}</h4>{" "}
            <h4>Days since I ate it: {val.daysSinceIAte} days.</h4>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
