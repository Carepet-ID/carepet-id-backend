const {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getProductsByCategory,
} = require("../controllers/productController");
const verifyRole = require("../module/roleAuth");
const {
  productCreateSchema,
  productUpdateSchema,
} = require("../schemas/productSchema");

module.exports = [
  {
    method: "GET",
    path: "/product",
    handler: getAllProducts,
    options: {
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/product/{category}",
    handler: getProductsByCategory,
    options: {
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/product",
    handler: createProduct,
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
        payload: productCreateSchema,
      },
    },
  },
  {
    method: "PUT",
    path: "/product/{id}",
    handler: updateProduct,
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
        payload: productUpdateSchema,
      },
    },
  },
  {
    method: "DELETE",
    path: "/product/{id}",
    handler: deleteProduct,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteAllData") }],
    },
  },
];
