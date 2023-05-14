import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PlaceDetail from "./PlaceDetail";
import { Button } from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker";


const List = ({ places, isLoading }) => {
    const [showList, setShowList] = useState(false)
    const [showProfessions, setShowProfessions] = useState(true)
    const [handymen, setHandmen] = useState([])
    const [booking,setBooking]=useState([])


     const [value, setValue] = useState({
        // startDate: new Date(),
        // endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const handleProfession =()=>{
      console.log("selected profession")
      setBooking()
      setShowList(true)
      setShowProfessions(false)

    } 

    const handleBooking=()=>{

    }


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/handymen');
      console.log(response)
      console.log(response.data)
      const jsonData = await response.json();
      console.log(jsonData)
      setHandmen(jsonData.data);
    }

    fetchData();
  }, []);

  // if (isLoading)
  //   return (
  //     <Flex
  //       direction={"column"}
  //       bg={"whiteAlpha.900"}
  //       width={"37vw"}
  //       height="100vh"
  //       position={"absolute"}
  //       left={0}
  //       top={0}
  //       zIndex={1}
  //       overflow="hidden"
  //       px={2}
  //     >
  //       <Box padding="6" boxShadow="lg" bg="white" mt={16}>
  //         <SkeletonCircle size="10" />
  //         <SkeletonText mt="4" noOfLines={4} spacing="4" />
  //       </Box>
  //       <Box padding="6" boxShadow="lg" bg="white" mt={3}>
  //         <SkeletonCircle size="10" />
  //         <SkeletonText mt="4" noOfLines={4} spacing="4" />
  //       </Box>
  //       <Box padding="6" boxShadow="lg" bg="white" mt={3}>
  //         <SkeletonCircle size="10" />
  //         <SkeletonText mt="4" noOfLines={4} spacing="4" />
  //       </Box>
  //       <Box padding="6" boxShadow="lg" bg="white" mt={3}>
  //         <SkeletonCircle size="10" />
  //         <SkeletonText mt="4" noOfLines={4} spacing="4" />
  //       </Box>
  //       <Box padding="6" boxShadow="lg" bg="white" mt={3}>
  //         <SkeletonCircle size="10" />
  //         <SkeletonText mt="4" noOfLines={4} spacing="4" />
  //       </Box>
  //     </Flex>
  //   );

  return (
    <Flex
      direction={"column"}
      bg={"whiteAlpha.900"}
      width={"37vw"}
      height="100vh"
      position={"absolute"}
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden"
      px={2}
    >
             {showProfessions?(
          <div>
          <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">Choose one</p>
          <div className="inline-block grid grid-cols-2 gap-x-4 gap-y-5">
            <Button type="submit" onClick={handleProfession} variant="outlined">Plumber</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Electrician</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Cook</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Cleaner</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Server</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Guard</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Bartender</Button>
            <Button type="submit" onClick={handleProfession} variant="outlined">Mechanic</Button>
            </div>
     
              <Datepicker 
              primaryColor={"blue"} 
            useRange={false} 
            asSingle={true} 
            value={value} 
            onChange={handleValueChange} 
            /> 

    
            </div>
           
        ):
         (
           <div>
            
          </div>
         )}

        {showList?(
              <Flex flex={1} overflowY={"scroll"} mt={16} direction={"column"}>
              {/* {Array.isArray(places)?places.map((place, i) => <PlaceDetail place={place} key={i} />): 
              <div>
                <h1>No places found</h1>
              </div>
              } */}

               {handymen?.map((man,i) => (
                  <PlaceDetail place={man} key={i} onClick={handleBooking}/>
                  ))}
              </Flex>
           
        ):
         (
           <div>
            
          </div>
         )}
 
    </Flex>
  );
};
export async function getStaticProps() {
  const response = await fetch('api/handymen');
  const handymen = await response.data;

  console.log(handymen)
  return {
    props: {
      handymen,
    },
  };
}

export default List;