function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform some asynchronous API request or other task here
    // If the task is successful, call resolve with the result
    // If there's an error, call reject with the error

    // For example, you can use a setTimeout to simulate an async task
    setTimeout(() => {
      resolve("API response data");
    }, 2000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;
