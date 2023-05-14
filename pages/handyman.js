import axios from "axios";
import Error from "next/error";

const baseURL = 'https://api.yelp.com/v3/businesses/search';
const apiKey = '_AYmFWWdgdtfitaLT9mEHF-iHOr7o5cacR3BFBUJoz4H5bLtrDa9WxrQPrnEbvIz78NrNzxCe3FRSNF0RbMBzlnjLok-RgogXiwQXGRnoydmoeHBsEQytFD6xG-nYHYx';

  export default async function handler(req, res) {
    const { location } = req.query;
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        term: 'restaurants',
        location: location,
      },
    });
    const restaurants = response.data.businesses;
    res.status(200).json({ message: 'Updated list of restuarants', data:restaurants});

    return restaurants
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong',error:error });
  }
}
// import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {

//     const { location,chef } = req.params;

//     // Connect to MongoDB
//     const client = await MongoClient.connect(process.env.MONGO_URL);
//     const db = client.db();

//     try {
      
//       //Get a list of handymen
//       const listHandymen = await db.collection('handymen').findAll(location:location,type:chef)
//       res.status(201).json({ message: 'List acquired successfully',data:listHandymen });
//     } catch (error) {
//       res.status(500).json({ message: 'Something went wrong' });
//     } finally {
//       client.close();
//     }
//   } else {
//     res.status(400).json({ message: 'Invalid request method' });
//   }
// }




