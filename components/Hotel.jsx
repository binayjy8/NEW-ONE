import useFetch from "../useFetch";
import { useState } from "react";

const Hotels = () => {
    const [successMessage, setSuccessMessag] = useState("");
    const { data, loading, error } = useFetch("https://hotel-6q8k.vercel.app/hotels");

    const handleDelete = async (hotelId) => {
        try{
            const response = await fetch(`https://hotel-6q8k.vercel.app/hotel/${hotelId}`,
                {method: "DELETE"},
            );
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
        </div>
    )
};

export default Hotels;