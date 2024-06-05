const {
  getAllArticles,
  getArticlesByCategory,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");
const verifyRole = require("../module/roleAuth");
const {
  articleCreateSchema,
  articleUpdateSchema,
} = require("../schemas/articleSchema");

module.exports = [
  {
    method: "GET",
    path: "/article",
    handler: getAllArticles,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/article/{category}",
    handler: getArticlesByCategory,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/article/detail/{id}",
    handler: getArticleById,
    options: {
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/article",
    handler: createArticle,
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
        payload: articleCreateSchema,
      },
    },
  },
  {
    method: "PUT",
    path: "/article/{id}",
    handler: updateArticle,
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
        payload: articleUpdateSchema,
      },
    },
  },
  {
    method: "DELETE",
    path: "/article/{id}",
    handler: deleteArticle,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteAllData") }],
    },
  },
];
