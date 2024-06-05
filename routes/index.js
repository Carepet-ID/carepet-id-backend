const articleRoutes = require("./articleRoutes");
const diseaseRoutes = require("./diseaseRoutes");
const dogRoutes = require("./dogRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const routes = [
  ...diseaseRoutes,
  ...articleRoutes,
  ...productRoutes,
  ...userRoutes,
  ...dogRoutes,
];

module.exports = routes;
