import React,{useState} from "react";
import "./style.css";

const UserForm= (props) => {
    const [title, changeTitle] = useState("");
    const [description, changeDescription] = useState("");
    const addToCart = props.addToCart;

    const handleSubmission = (e) => {
        const newData = {
            title: title,
            description: description
        }

        changeTitle("");
        changeDescription("");

        addToCart(newData);
        e.preventDefault();
    }

    return (
        <div className="form-style">
            <h3 className="form-title">Add to Cart</h3>
            <form className="form-input-container" onSubmit={(e) => handleSubmission(e)}>
                <div className="input-container">
                    <label className="input-label">Title</label><br/>
                    <input 
                        type="text" 
                        className="input-field" 
                        placeholder="Enter your title" 
                        value={title}
                        onChange={(e) => changeTitle(e.target.value)}
                        required />
                </div>
                <div className="input-container" >
                    <label className="input-label">Description</label><br/>
                    <textarea 
                        rows={3} 
                        cols={25} 
                        className="input-field" 
                        placeholder="Enter your description" 
                        value={description}
                        onChange={(e) => changeDescription(e.target.value)} 
                        required ></textarea>
                </div>
                <input type="submit" className="submit-button"/>
            </form>
        </div>
    )
}

export default UserForm;
