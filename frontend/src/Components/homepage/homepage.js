import React from "react";
import "./homepage.css";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/addnote">
        <div className="homepage-title">
          <h2>Add a new note</h2>
          <span>
            <AddIcon />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
