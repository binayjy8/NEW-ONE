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
    }
}