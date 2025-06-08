import { useState } from "react";

const AddBuilding = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBuilding = {
            id: Date.now(),
            title,
            location,
            img,
            upvotes: 0,
            downvotes: 0,
            starred: false,
        };
        onAdd(newBuilding);
        setTitle("");
        setLocation("");
        setImg("");
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <h2>Add Brutalist Building</h2>
            <input
                type="text"
                placeholder="Building Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Image URL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddBuilding;