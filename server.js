"use strict";

const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const { jwtSecret } = require("./config/jwtConfig");
const { User } = require("./models");
const Boom = require("boom");
require("dotenv").config();

const loadModel = require("./module/loadModel");

const validate = async function (decoded, request, h) {
  // Lakukan validasi token di sini (misalnya memeriksa di database)
  const user = await User.findByPk(decoded.id);
  if (!user) {
    throw Boom.unauthorized("Invalid credentials");
  }

  // Simpan informasi pengguna yang validasi dalam `credentials`
  return {
    isValid: true,
    credentials: { id: user.id, username: user.username, role: user.role },
  };
};

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  const model = await loadModel();
  server.app.model = model;

  await server.register(require("hapi-auth-jwt2"));
  server.auth.strategy("jwt", "jwt", {
    key: jwtSecret,
    validate,
    verifyOptions: { algorithms: ["HS256"] },
  });
  server.auth.default("jwt");

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
