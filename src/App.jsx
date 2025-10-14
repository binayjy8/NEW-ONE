import Hotels from "../components/Hotel";
import HotelByName from "../components/HotelByName";
import useFetch from "../useFetch";

export default function App() {
  return (<main> 
    <Hotels />
    <HotelByName name="The Grand Regal"/>
  </main>)
}
