import React from 'react';
import "./card.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Card = () => {
    
    return (
        <div className = "card">
            <div className="card-title">Title</div>
            <div className="card-body">
                <p>Last Modified date</p>
                <div className="social-icons">
                    <EditIcon />
                    <DeleteIcon/>
                </div>
                    
            </div>
        </div>
    )
}

export default Card;
