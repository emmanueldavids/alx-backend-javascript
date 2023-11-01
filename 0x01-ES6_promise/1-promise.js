#!/usr/bin/node

// resolving the promise using two atributes for the resolve

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject( new Error('The fake API is not working currently'));
      }
  });
}

export default getFullResponseFromAPI;
