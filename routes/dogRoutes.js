const { options } = require("@hapi/joi/lib/base");
const {
  addDog,
  getAllDogs,
  getDogById,
  updateDog,
  deleteDog,
} = require("../controllers/dogController");
const verifyRole = require("../module/roleAuth");
const { dogUpdateSchema, dogCreateSchema } = require("../schemas/dogSchema");

module.exports = [
  {
    method: "POST",
    path: "/dog",
    handler: addDog,
    options: {
      payload: {
        allow: ["multipart/form-data"],
        multipart: true,
        output: "stream", // Needed for handling file upload
        parse: true,
        maxBytes: 10 * 1024 * 1024,
      },
      validate: {
        payload: dogCreateSchema,
      },
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateOwnData") }],
    },
  },
  {
    method: "GET",
    path: "/dog",
    handler: getAllDogs,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canAccessOwnData") }],
    },
  },
  {
    method: "GET",
    path: "/dog/{dogId}",
    handler: getDogById,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canAccessOwnData") }],
    },
  },
  {
    method: "PUT",
    path: "/dog/{dogId}",
    handler: updateDog,
    options: {
      payload: {
        allow: ["multipart/form-data"],
        multipart: true,
        output: "stream", // Needed for handling file upload
        parse: true,
        maxBytes: 10 * 1024 * 1024,
      },
      validate: {
        payload: dogUpdateSchema,
      },
      auth: "jwt",
      pre: [{ method: verifyRole("canUpdateOwnData") }],
    },
  },
  {
    method: "DELETE",
    path: "/dog/{dogId}",
    handler: deleteDog,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteOwnData") }],
    },
  },
];
