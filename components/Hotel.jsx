import useFetch from "../useFetch";

const Hotels = () => {

    const { data, loading, error } = useFetch("https://hotel-6q8k.vercel.app/hotels");
    console.log(data);

    return (
        <div>
            <h2>All Hotels</h2>
            <ul>
                {data?.map((hotel) => (
                    <li>{hotel.name}</li>
                ))}
            </ul>
        </div>
    )
};

export default Hotels;