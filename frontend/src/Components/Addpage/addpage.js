import React from 'react';
import "./addpage.css";

const Addpage = () => {
   let noteTitle = document.getElementById("title").value;
    let note = document.getElementById("note-body").value;
    let form = document.getElementById("form");

    form.addEventListener("submit", postNote);
    const postNote = (e) => {
        e.preventDefault();
         fetch("localhost:5000/api/v1/note", {
        method: 'POST',
        headers: {
            'Accept': 'application/json , text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name:noteTitle, title: noteTitle, description: note })
    })
        .then(res => res.json())
        .then(data => console.log(data));
    }
     
return (
        <div className = "addpage">
            <form id = "form">
            <input type="text" placeholder="Title" id = "title" autoFocus />
            <textarea cols="30" rows="10"  id = "note-body"placeholder = "Write notes here..."></textarea>
            <button>Save</button>
        </form>
        
    </div>
    
    )

    

}

export default Addpage;
