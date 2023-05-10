import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api/handyman";
import Head from "next/head";
import axios from "axios";


const BookingMap = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
  }, [ratings]);


  // useEffect(() => {
  //   setIsLoading(true);

  //   const fetchRestaurants = async (location) => {
  //     try {
  //       const response = await axios.get('/api/restaurants', {
  //         params: {
  //           location: location, // Replace with your desired location or make it dynamic
  //         },
  //       });

  //       let restaurants=response.data.data
  //       console.log(restaurants)

  //       setPlaces(restaurants)
  //       setRestaurants(restaurants);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //     }
  //   };

  //   fetchRestaurants('San Francisco');
  // }, [ ]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
  //     console.log(data);
  //     setPlaces(data);
  //     setIsLoading(false);
  //   });
  // }, [type, coordinates, bounds])

  return (
    
    <>
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      {/* <Head> */}
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB68BIJkMeQLuHc2eXW5UOVGnzIPKfs7Hg"></script>
      {/* </Head> */}

      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

      {/* <List
        places={filteredPlaces.length ? filteredPlaces : places}
        // places={restaurants}
        isLoading={isLoading}
      /> */}

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
        // places={restaurants}

      />
    </Flex>
    </>
  );
};

export default BookingMap;



