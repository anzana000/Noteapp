import React from "react";
import "./homepage.css";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
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
