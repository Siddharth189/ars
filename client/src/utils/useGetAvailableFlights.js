import { useState, useEffect } from "react";
import { setFlights } from "./flightSlice";
import useGetFlights from "./useGetFlights";

const useGetAvailableFlights = () => {
  const allFlights = useGetFlights();

  const [bookedFlights, setBookedFlights] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:8080/get-all-bookings")
  //     .then((data) => data.json())
  //     .then((data) => setBookedRooms(data));
  // }, []);

  const flights = bookedFlights
    ? allRooms?.filter(
        (flight) =>
          !bookedFlights.map((booking) => booking.flightId).includes(flight._id)
      )
    : allFlights;

  return flights;
};

export default useGetAvailableFlights;
