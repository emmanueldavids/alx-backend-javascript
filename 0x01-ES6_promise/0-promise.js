#!/usr/bin/node

"use strict";


function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous API call or network request
      setTimeout(() => {
        const data = { message: "Success!", code: 200 };
        // Resolve the Promise with the data
        resolve(data);
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  export default getResponseFromAPI;