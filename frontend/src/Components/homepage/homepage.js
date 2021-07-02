import React from 'react';
import "./homepage.css";
import AddIcon from '@material-ui/icons/Add';

const Homepage = () => {
    return (
        <div className = "homepage">
            <div className="homepage-title">
                <h2>Add a new note</h2>
                <span><AddIcon/></span>
            </div>
        </div>
    )
}

export default Homepage
