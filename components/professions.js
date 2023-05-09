import { Button } from "@material-tailwind/react";
function Profession() {
    return ( 
        <>
        <div></div>
    <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">Choose one</p>
    <div className="inline-block grid grid-cols-2 gap-x-4 gap-y-5">
      <Button variant="outlined">Plumber</Button>
      <Button variant="outlined">Electrician</Button>
      <Button variant="outlined">Cook</Button>
      <Button variant="outlined">Cleaner</Button>
      <Button variant="outlined">Server</Button>
      <Button variant="outlined">Guard</Button>
      <Button variant="outlined">Bartender</Button>
      <Button variant="outlined">Mechanic</Button>
      </div>
 </>
 )
}

export default Profession;