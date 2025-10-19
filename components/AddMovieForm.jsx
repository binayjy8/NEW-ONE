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
        const { name, value, type, checked } = e.target; 

        setFormData((prevState) => ({
            ...prevState, 
            [name]: 
                type === "checkbox" ? checked :

                name === "rating" ? (value === "" ? 0 : parseInt(value)) :
                name === "amenities" 
                    ? value.split(',').map(item => item.trim()).filter(item => item !== "")
                    : 
                value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await fetch("https://hotel-6q8k.vercel.app/hotels",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if(!response.ok){
                throw "Failed to add hotel";
            }

            const data = await response.json();

            console.log("Added Hotel", data);
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Add new Hotel</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
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
                <label>Rating (1-5):</label>
                <input
                    type="number"
                    name="rating"
                    value={formData.rating === 0 ? "" : formData.rating} 
                    onChange={handleChange}
                    min="1"
                    max="5"
                />
                <br />
                <br />
                <label>Price Range:</label>
                <input
                    type="text"
                    name="priceRange"
                    value={formData.priceRange}
                    onChange={handleChange}
                    placeholder="e.g., $$$ (31-60)"
                />
                <br /><br />

                <label>Website:</label>
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                />
                <br /><br />

                <label>Phone Number:</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <br /><br />

                <h3>Times</h3>
                <label>Check-in Time:</label>
                <input
                    type="text"
                    name="checkInTime"
                    value={formData.checkInTime}
                    onChange={handleChange}
                    placeholder="e.g., 2:00 PM"
                />
                <br /><br />

                <label>Check-out Time:</label>
                <input
                    type="text"
                    name="checkOutTime"
                    value={formData.checkOutTime}
                    onChange={handleChange}
                    placeholder="e.g., 11:00 AM"
                />
                <br /><br />
                <h3>Availability & Amenities</h3>

                <label>
                    <input
                        type="checkbox"
                        name="reservationsNeeded"
                        checked={formData.reservationsNeeded}
                        onChange={handleChange}
                    />
                    Reservations Needed
                </label>
                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="isParkingAvailable"
                        checked={formData.isParkingAvailable}
                        onChange={handleChange}
                    />
                    Parking Available
                </label>
                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="isWifiAvailable"
                        checked={formData.isWifiAvailable}
                        onChange={handleChange}
                    />
                    Wi-Fi Available
                </label>
                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="isPoolAvailable"
                        checked={formData.isPoolAvailable}
                        onChange={handleChange}
                    />
                    Pool Available
                </label>
                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="isSpaAvailable"
                        checked={formData.isSpaAvailable}
                        onChange={handleChange}
                    />
                    Spa Available
                </label>
                <br /><br />

                <label>
                    <input
                        type="checkbox"
                        name="isRestaurantAvailable"
                        checked={formData.isRestaurantAvailable}
                        onChange={handleChange}
                    />
                    Restaurant Available
                </label>
                <br /><br />

                <label>Amenities (comma-separated):</label>
                <input
                    type="text"
                    name="amenities"
                    value={formData.amenities.join(', ')} 
                    onChange={handleChange}
                    placeholder="Gym, Laundry, Pet-Friendly"
                />
                <br /><br />

                <button type="submit">Add Hotel</button>
            </form>
        </div>
    )
}

export default AddHotelForm;