import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    if(!req.body) {
      return res.status(404).json({ error: "Don't have form data...!"});
    }
    const { email, password } = req.body;

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();

    
    try {
      // Find the user in the database
      const user = await db.collection('users').findOne({ email });
      if (!user) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
      }

      // Check if the password matches
      if (user.password !== password) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
      }

      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    } finally {
      client.close();
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}

