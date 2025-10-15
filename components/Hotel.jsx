import useFetch from "../useFetch";

const Hotels = () => {

    const { data, loading, error } = useFetch("https://hotel-6q8k.vercel.app/hotels");
    console.log(data);

    return (
        <div>
            <ul>
                {data?.map((hotel) => (
                    <li>{hotel.name}</li>,
                    <li>{hotel.location}</li>
                ))}
            </ul>
        </div>
    )
};

export default Hotels;