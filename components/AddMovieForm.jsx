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
            <h2>Add new Hotel</h2>
            <form>
                <label>Name:</label>
                <br />
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />{" "}
                <br />
                <br />
                <label>Category</label>
                <br />
                <input 
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label>Location:</label>
                <br />
                <input 
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label>Director</label>
                <input 
                    type="text"
                    name="director"
                    value={formData.director}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default AddMovieForm;