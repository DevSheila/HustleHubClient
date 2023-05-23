import axios from 'axios';

export default async function handler(req, res) {

  if (req.method === 'POST') {
    let data = JSON.stringify({
      "type": "document_and_selfie",
      "options": {
        "allow_uploads": true
      },
       "return_url":"https://96b2-105-163-0-39.ngrok-free.app"
    });

    let config = {
      method: 'post',
      url: 'https://api.falu.io/v1/identity/verifications',
      headers: { 
        'X-Falu-Version': '2022-09-01', 
        'Authorization': 'Bearer fskl_9ubw3NAokGIF4lC6K61o2YIGC4S2KVTwj2', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    try {
      const response = await axios(config);
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res.status(error.response.status).json(error.response.data);
    }
  }

}
