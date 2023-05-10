import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  

    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const db = client.db();

    try {

        const handymenCollection = db.collection('duummy5');
        const result = await handymenCollection.find().toArray();
    
      res.status(200).json({ message: 'User created',data:result });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    } finally {
      client.close();
    }

}