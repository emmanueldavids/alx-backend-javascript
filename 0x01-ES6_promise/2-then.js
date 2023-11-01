#!/usr/bin/node

// using promises

function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {};
    })

    .catch(() => new Error());
}

export default handleResponseFromAPI;
