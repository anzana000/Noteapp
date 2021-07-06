import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Addpage/addpage.css";

const EditNote = (props) => {
  let history = useHistory();

  const [title, setTitle] = useState({
    name: "props.name",
    description: "props.description",
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
      .patch(`/api/v1/note/${props.id}`, newNote)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    history.push("/");
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
        <button>Save</button>
      </form>
    </div>
  );
};

export default EditNote;
