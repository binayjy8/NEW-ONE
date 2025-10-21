import useFetch from "../useFetch";

const Hotels = () => {

    const { data, loading, error } = useFetch("https://hotel-6q8k.vercel.app/hotels");

    const handleDelete = async (hotelId) => {
        try{
            const response = await fetch(`https://hotel-6q8k.vercel.app/hotels/${hotelId}`)
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h2>All Hotels</h2>
            <ul>
                {data?.map((hotel) => (
                    <li key={hotel._id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default Hotels;