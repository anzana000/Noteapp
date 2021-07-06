

import axios from "axios";
import React, { useState, useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "./card.css";

const Card = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function data() {
      await axios
        .get("/api/v1/note")
        .then((res) => setNotes(res.data.data.notes))
        .catch((err) => console.log(err));
    }
    data();
  });
    
//  const editIcon = document.getElementById("edit");
//   const deleteIcon = document.getElementById("delete").parentElement.parentElement.getAttribute("key");
//   console.log(deleteIcon)
  
  // deleteIcon.addEventListener("click", e => {
  //   const parentId = e.target.parentElement.parentElement.getElementByAttribute("key");
  //   console.log(parentId);
  // })
  

  return (
    <div className="cards" >
      {notes.map((note) => {
       
        return (   
         
          <div className="card" key = {note._id}>
            <div className="card-title">{note.name}</div>
            <div className="card-body">
              <p>{note.description.length > 50 ? note.description.slice(0, 50) + "..." : note.description}</p>
            </div>
             <span className="socials">
              <span className = "date">  {`Last modified: ${note.createdAt.split("T")[0]}`}</span>
                <EditIcon id = "edit"/>
                <DeleteIcon id = "delete"/>
              </span>
            </div>
           
        );
      })}
    </div>
  );
};

export default Card;
