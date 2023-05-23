import axios from 'axios';
import { MongoClient } from 'mongodb';
import {parse, stringify, toJSON, fromJSON} from 'flatted';

function findWordInJSON(jsonString, startChars) {
  try {
    const jsonData = JSON.parse(jsonString);
    
    // Iterate through each key in the JSON object
    for (let key in jsonData) {
      const value = jsonData[key];
      
      // Check if the value is a string and starts with the given characters
      if (typeof value === 'string' && value.startsWith(startChars)) {
        return value; // Return the first matching word
      }
    }
    
    // If no match is found, return null or any other desired value
    return null;
  } catch (error) {
    console.error('Invalid JSON string:', error);
    return null;
  }
}

 async function getArtisanDetails(id){
      //  const  id  = req.query;
        let config = {
          method: 'GET',
          url: `https://api.falu.io/v1/events/${id}`,
          headers: { 
            'X-Falu-Version': '2022-09-01', 
            'Authorization': 'Bearer fskl_9ubw3NAokGIF4lC6K61o2YIGC4S2KVTwj2', 
            'Content-Type': 'application/json'
          }
        };
        try {
          const response = await axios(config);
          // console.log(response.data.data.object.outputs)
          return response.data.data.object.outputs
        } catch (error) {
          return error;

        }
  }

export default async function handler(req, res) {
  const url = 'https://96b2-105-163-0-39.ngrok-free.app/webhook';// webhook to FALU for identitity verification

  try {
      const response = await fetch(url, {
        method: 'POST',
      });
      //acquire event key from FALU
      const resStringify = stringify(res);
      const startChars = 'evt';
      const event = findWordInJSON(resStringify, startChars);
      console.log("event "+event)
      let artisan = await getArtisanDetails(event)

      //save artisan details to mongo db
      const client = await MongoClient.connect(process.env.MONGO_URL);   // Connect to MongoDB
      const db = client.db();
   
      // //Check if the profile already exists
      // const existingUser = await db.collection('artians').findOne({ email });
      // if (existingUser) {
      //   res.status(409).json({ message: 'Profile email already exists' });
      //   return;
      // }

      // Create a new artisan
      const result = await db.collection('falu').insertOne(artisan);
      console.log("mongo"+result)
      return res.status(201).json({ message: 'Profile created' ,data:result});

      // console.log(artisan)
      // return   res.status(200).json({name:"hello"});
      // return   res.send(artisan);
    } catch (error) {
      // Handle network or other errors
      console.error('Error occurred while sending webhook request:', error);
      return res.status(500).json({ message: 'Something went wrong' ,error:error});
    }
   
    
 
}






