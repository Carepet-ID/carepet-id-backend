const postPredictHandler = require("../controllers/predictionController");
const verifyRole = require("../module/roleAuth");

module.exports = [
  {
    method: "POST",
    path: "/predict",
    handler: postPredictHandler,
    options: {
      payload: {
        allow: ["application/json", "multipart/form-data"],
        multipart: true,
        // output: "stream", // Needed for handling file upload
        // parse: true,
        // maxBytes: 10 * 1024 * 1024,
      },
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateOwnData") }],
    },
  },
];
