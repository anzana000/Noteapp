import React from 'react';
import "./addpage.css";

const Addpage = () => {
    return (
        <div className = "addpage">
            <input type="text" placeholder="Title" autoFocus />
            <textarea cols="30" rows="10" placeholder = "Write notes here..."></textarea>
            <button>Save</button>
        </div>
    )
}

export default Addpage
