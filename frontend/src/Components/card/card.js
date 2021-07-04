// import React from 'react';
// import "./card.css";
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

// const Card = () => {
    
//     return (
//         <div className="card-wrapper">
//             <div className = "card">
//             <div className="card-title">Title</div>
//             <div className="card-body">
//                 <p>Last Modified date</p>
//                 <div className="social-icons">
//                     <EditIcon />
//                     <DeleteIcon/>
//                 </div>
                    
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Card;

import axios from "axios";
import React, { useState, useEffect } from "react";
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
  return (
    <div className="cards">
      {notes.map((note) => {
        return (
          <div className="card">
                <ul>
                     <li>{note.name}</li>
            <li>{note.description}</li>
           </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
