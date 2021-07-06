import React from "react";
import "./homepage.css";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sort">
             <label for="cars">Sort</label>
<select id="sort" name="sort" size="1" >
  <option value="dateasc">By date asc</option>
  <option value="datedesc">By date desc</option>
  <option value="nameasc">By name asc</option>
  <option value="namedesc">By name desc</option>
</select>
 </div>
  
      <Link to="/addnote">
        <div className="homepage-title">
         
          <span className = "add-icon">
            <AddIcon />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
