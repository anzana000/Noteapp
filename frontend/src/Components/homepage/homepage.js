import React from "react";
import "./homepage.css";
import AddIcon from "@material-ui/icons/Add";
// import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 id="ash">Keep notes</h1>
      <Link to="/addnote">
        <div className="homepage-title">
          <span className="add-icon">
            <AddIcon />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
