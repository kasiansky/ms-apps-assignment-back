const imageService = require("../services/imageService");

const getData = async (req, res) => {
  const data = await imageService.getData(req.query);

  res.json(data);
};

module.exports = {
  getData,
};
