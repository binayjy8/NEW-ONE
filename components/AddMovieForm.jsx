import React, { useState } from "react"; 

const AddMovieForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        releaseYear: "",
        genre: "",
        director: "",
        actors: "",
        language: "",
        country: "",
        rating: "",
        plot: "",
        awards: "",
        posterUrl: "",
        trailerUrl: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState, [name]: 
                    name === "releaseYear" || name === "rating" ? parseInt(value): 
                    value,
        }));
    };

    return (
        <div>
            <h2>Add new movie</h2>
            <form>
                <label>Title:</label>
                <br />
                <input 
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />{" "}
            </form>
        </div>
    )
}