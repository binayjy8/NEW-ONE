import React, { useState } from "react"; 

const AddHotelForm = () => {
    const [formData, setFormData] = useState({
        name: "", 
        category: "",
        location: "",
        rating: 0, 
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: [], 
        priceRange: "",
        reservationsNeeded: false,
        isParkingAvailable: false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
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

export default AddHotelForm;