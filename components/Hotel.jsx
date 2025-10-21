import { useState } from "react";
import useFetch from "../useFetch";


const Hotels = () => {
    const [successMessage, setSuccessMessag] = useState("");
    const { data, loading, error } = useFetch("https://hotel-6q8k.vercel.app/hotels");

    const handleDelete = async (hotelId) => {
        try{
            const response = await fetch(`https://hotel-6q8k.vercel.app/hotels/${hotelId}`,
                {method: "DELETE"},
            );

            if(!response.ok){
                throw "Failed to delete hotel.";
            }

            const data = await response.json();
            if (data) {
                setSuccessMessag("Hotel deleted successfully");
                window.location.reload();
            }

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h2>All Hotels</h2>
            <ul>
                {data?.map((hotel) => (
                    <li key={hotel._id}>
                        {hotel.name}{" "}
                        <button onClick={() => handleDelete(hotel._id)}>Delete</button>
                        </li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
};

export default Hotels;