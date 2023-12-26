import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const DataDisplay = (props) => {
    const todoData = props.userData;
    const navigate = useNavigate()
    
    return (
        <div>
            <ul className="data-input-list">
                {todoData.map((todo) => (
                    <li className="individual-data">
                        <p><b>{todo.title} : </b>{todo.description}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate('/userForm')} className="add-button">Add</button>
        </div>
    )
}

export default DataDisplay;
