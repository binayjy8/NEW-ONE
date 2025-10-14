import useFetch from "../useFetch";

const HotelByName = ({name}) => {
    const { data, loading, error } = useFetch(`https://hotel-6q8k.vercel.app/hotels${name}`);
    console.log(data);
};

export default HotelByName;