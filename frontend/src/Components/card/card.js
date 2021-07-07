import axios from "axios";
import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () => {
  // const location = useLocation();
  // const { sort } = location.state;
  const [notes, setNotes] = useState([]);

  const [dele, setDele] = useState(false);

  const [sort, setSort] = useState("?sort=-createdAt");

  useEffect(() => {
    async function data() {
      await axios
        .get(`/api/v1/note${sort}`)
        .then((res) => setNotes(res.data.data.notes))
        .catch((err) => console.log(err));
    }
    data();
  }, [sort, dele]);

  const deleteNote = (id) => {
    async function del() {
      await axios.delete(`/api/v1/note/${id}`);
    }
    del();
    setDele(!dele);
  };
  const styles = {
    marginLeft: "2rem",
    marginTop: "2rem",
  };
  if (sort === "?name=") {
    setSort("?sort=-createdAt");
  }
  return (
    <div>
      <div>
        <div style={styles}>
          <label htmlFor="">Sort</label>

          <select
            id="sort"
            name="sort"
            size="1"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="?sort=-createdAt">By date asc</option>
            <option value="?sort=createdAt">By date desc</option>
            <option value="?sort=-name">By name asc</option>
            <option value="?sort=name">By name desc</option>
          </select>
        </div>
      </div>

      <div className="search">
        <input
          type="text"
          id="searchicon"
          name="searchicon"
          placeholder="Search notes"
          onChange={(e) => setSort(`?name=${e.target.value}`)}
        />
        <label class="search-icon" for="searchicon">
          <SearchIcon />
        </label>
      </div>

      <div className="cards">
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
                  <Link
                    to={{
                      pathname: "/editnote",
                      state: {
                        id: note._id,
                        name: note.name,
                        description: note.description,
                      },
                    }}
                  >
                    <EditIcon />
                  </Link>
                  <span onClick={() => deleteNote(note._id)}>
                    <DeleteIcon />
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
