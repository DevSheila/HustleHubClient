import { Box, Flex, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React, { useState } from "react";
import PlaceDetail from "./PlaceDetail";
import { Button } from "@material-tailwind/react";


const List = ({ places, isLoading }) => {
    const [showList, setShowList] = useState(false)
    let [showProfessions, setShowProfessions] = useState(true)

    const handleProfession =()=>{
      console.log("selected profession")
      setShowList(true)
      setShowProfessions(false)

    } 

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
            </div>
           
        ):
         (
           <div>
            
          </div>
         )}

        {showList?(
              <Flex flex={1} overflowY={"scroll"} mt={16} direction={"column"}>
              {Array.isArray(places)?places.map((place, i) => <PlaceDetail place={place} key={i} />): 
              <div>
                <h1>No places found</h1>
              </div>
              }
              </Flex>
           
        ):
         (
           <div>
            
          </div>
         )}
 
    </Flex>
  );
};

export default List;