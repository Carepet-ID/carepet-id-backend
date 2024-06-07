const articleRoutes = require("./articleRoutes");
const bookmarkRoutes = require("./bookmarkRoutes");
const diseaseRoutes = require("./diseaseRoutes");
const dogRoutes = require("./dogRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const predictionRoutes = require("./predicitonRoutes");
const routes = [
  ...diseaseRoutes,
  ...articleRoutes,
  ...productRoutes,
  ...userRoutes,
  ...dogRoutes,
  ...bookmarkRoutes,
  ...predictionRoutes,
];

module.exports = routes;
