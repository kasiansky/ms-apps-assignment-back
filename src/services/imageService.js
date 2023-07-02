const handleApiRequest = require("../utils/handleApiRequest");

const getData = async (params) => {
  return await handleApiRequest({
    method: "GET",
    url: `${process.env.API_URL}?key=${process.env.KEY}`,
    params,
  });
};

module.exports = {
  getData,
};
