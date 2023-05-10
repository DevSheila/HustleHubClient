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



