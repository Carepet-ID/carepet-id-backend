const {
  getAllDiseases,
  getDiseasesByCategory,
  getDiseaseById,
  deleteDisease,
  updateDisease,
  createDisease,
} = require("../controllers/diseaseController");
const verifyRole = require("../module/roleAuth");
const {
  diseaseCreateSchema,
  diseaseUpdateSchema,
} = require("../schemas/diseaseSchema");

module.exports = [
  {
    method: "GET",
    path: "/disease",
    handler: getAllDiseases,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/disease/{category}",
    handler: getDiseasesByCategory,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/disease/detail/{id}",
    handler: getDiseaseById,
    options: {
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/disease",
    handler: createDisease,
    options: {
      payload: {
        allow: ["multipart/form-data"],
        multipart: true,
        output: "stream", // Needed for handling file upload
        parse: true,
        maxBytes: 10 * 1024 * 1024,
      },
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateAllData") }],
      validate: {
        payload: diseaseCreateSchema,
      },
    },
  },
  {
    method: "PUT",
    path: "/disease",
    handler: updateDisease,
    options: {
      payload: {
        allow: ["multipart/form-data"],
        multipart: true,
        output: "stream", // Needed for handling file upload
        parse: true,
        maxBytes: 10 * 1024 * 1024,
      },
      auth: "jwt",
      pre: [{ method: verifyRole("canUpdateAllData") }],
      validate: {
        payload: diseaseUpdateSchema,
      },
    },
  },
  {
    method: "DELETE",
    path: "/disease",
    handler: deleteDisease,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteAllData") }],
    },
  },
];
