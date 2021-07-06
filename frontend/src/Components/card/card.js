import axios from "axios";
import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./card.css";

const Card = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function data() {
      await axios
        .get("/api/v1/note?sort=-createdAt")
        .then((res) => setNotes(res.data.data.notes))
        .catch((err) => console.log(err));
    }
    data();
  });

  const deleteNote = (id) => {
    async function del() {
      await axios.delete(`/api/v1/note/${id}`);
    }
    del();
  };

  return (
    <div className="cards">
      {notes.map((note) => {
        return (
          <div className="card" key={note._id}>
            <div className="card-title">{note.name}</div>
            <div className="card-body">
              <p>{note.description}</p>
            </div>
            <span className="socials">
              <span className="date">
                {`Last modified: ${note.createdAt.split("T")[0]}`}
              </span>
              <EditIcon />
              <span onClick={() => deleteNote(note._id)}>
                <DeleteIcon />
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
