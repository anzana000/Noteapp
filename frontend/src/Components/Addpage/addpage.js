import React, { useState } from "react";
import axios from "axios";
import "./addpage.css";

const Addpage = () => {
  const [title, setTitle] = useState({
    name: "",
    description: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTitle({ ...title, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { ...title };

    axios
      .post("/api/v1/note", newNote)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setTitle({
      name: "kajef",
      description: "alsuhdf",
    });
  };

  return (
    <div className="addpage">
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          id="title"
          autoFocus
          onChange={handleInput}
          name="name"
        />
        <textarea
          cols="30"
          rows="10"
          id="note-body"
          placeholder="Write notes here..."
          onChange={handleInput}
          name="description"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Addpage;
