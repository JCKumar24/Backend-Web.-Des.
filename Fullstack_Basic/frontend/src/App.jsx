import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>JC Kumar</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <p key={joke}>{joke}</p>
      ))}
    </>
  );
}

export default App;
