const axios = require("axios");

const handleApiRequest = async ({ method, url, params = "" }) => {
  try {
    const request = {
      method,
      url,
      params,
    };
    const response = await axios(request);

    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

module.exports = handleApiRequest;
