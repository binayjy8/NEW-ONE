import useFetch from "../useFetch";

const HotelByName = ({name}) => {
    const { data, loading, error } = useFetch(`https://hotel-6q8k.vercel.app/hotel${name}`,);
    console.log(data);

    return data ? (
        <div>  
            <h2>{data.name}</h2>
            <p>{data.location}</p>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )
};

export default HotelByName;