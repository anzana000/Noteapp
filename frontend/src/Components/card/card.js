import axios from "axios";
import React, { useState, useEffect } from "react";
import "./card.css";

const Card = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function data() {
      const res = await axios
        .get("/api/v1/note")
        .then((res) => setNotes(res.data.data.notes))
        .catch((err) => console.log(err));
    }
    data();
  });
  return (
    <>
      {console.log(notes)}
      {notes.map((note) => {
        <div className="card">
          <li>{note}</li>
        </div>;
      })}
    </>
  );
};

export default Card;
