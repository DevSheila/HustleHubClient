import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const HandymanVerification = () => {

    const router = useRouter();

    const fetchVerification = async () => {
        try {
          const response = await fetch('/api/verifications', {
            method: 'POST',
          });
          const jsonData = await response.json();
          console.log(jsonData)
          handleWebhook()
          // Redirect to a specific route after the component mounts
           router.push(jsonData.url);

        } catch (error) {
           console.log(error)
          console.error('Error fetching data:', error);
        }
    }

    const handleWebhook= async () => {
      try {
        const res = await fetch('/api/webhooks', {
          method: 'POST',
        });

        // const result = await res.json();

        console.log("result2  "+res)
        // console.log("result3  "+result)

      } catch (error) {
        console.log(error)
      }
    }

    // const fetchArtisanDetails = async (id) => {
    //     try {
    //       const response = await fetch(`/api/verifications/${id}`, {
    //         method: 'GET',
    //       });
    //       const jsonData = await response.json();
    //       console.log("user deatils"+jsonData)
         
    //       // Redirect to a specific route after the component mounts
    //        router.push(jsonData.url);

    //     } catch (error) {
    //        console.log(error)
    //       console.error('Error fetching data:', error);
    //     }
    // }
  return (

    <div>
      <button onClick={fetchVerification}>Fetch Data</button>
    </div>
  );
};

export default HandymanVerification;



