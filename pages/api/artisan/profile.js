import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
     if(!req.body) {
      return res.status(404).json({ error: "Don't have form data...!"});
     }
    const { username, email, profession,years,image } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();
   

    try {
      // Check if the profile already exists
      const existingUser = await db.collection('artians').findOne({ email });
    

      if (existingUser) {
        res.status(409).json({ message: 'Profile email already exists' });
        return;
      }

      // Create a new user
 

      const result = await db.collection('artisans').insertOne(req.body);
      return res.status(201).json({ message: 'Profile created' ,data:result});
    } catch (error) {

      return res.status(500).json({ message: 'Something went wrong' });
    } finally {
      client.close();
    }
  } else {
    console.log("yeyeyy6")

    return res.status(400).json({ message: 'Invalid request method' });
  }
}