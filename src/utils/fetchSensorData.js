const fetchSensorData = () => {
  return new Promise((resolve, reject) => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_DATA_URL + '/data', {
        method: "GET",
      });
      const responseData = await response.json();
      if (responseData) {
        return responseData;
      }
      throw Error("Nope. Try again.");
    }

    fetchData()
      .then((fetchedData) => {
        resolve(fetchedData);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchSensorData;