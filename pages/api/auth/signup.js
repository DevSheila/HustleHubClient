import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
     if(!req.body) {
      return res.status(404).json({ error: "Don't have form data...!"});
     }
    const { username, email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();


    try {
      // Check if the user already exists
      const existingUser = await db.collection('users').findOne({ email });
      if (existingUser) {
        res.status(409).json({ message: 'Account already exists',msgColor:"bg-red-500" });
        return;
      }

      // Create a new user
      const result = await db.collection('users').insertOne({ username, email,  password : await hash(password, 12) });
      res.status(201).json({ message: 'Account created successfully',msgColor:"bg-green-500" ,result:result });
    } catch (error) {

      res.status(500).json({ message: 'Something went wrong',msgColor:"bg-red-500" ,error:error });
    } finally {
      client.close();
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}


