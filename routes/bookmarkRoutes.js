const {
  getAllBookmarks,
  getBookmarkById,
  addBookmark,
  deleteBookmark,
} = require("../controllers/bookmarkController");

module.exports = [
  {
    method: "GET",
    path: "/bookmark",
    handler: getAllBookmarks,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canAccessOwnData") }],
    },
  },
  {
    method: "GET",
    path: "/bookmark/{articleId}",
    handler: getBookmarkById,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canAccessOwnData") }],
    },
  },
  {
    method: "POST",
    path: "/bookmark/{articleId}",
    handler: addBookmark,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canCreateOwnData") }],
    },
  },
  {
    method: "DELETE",
    path: "/bookmark/{articleId}",
    handler: deleteBookmark,
    options: {
      auth: "jwt",
      pre: [{ method: verifyRole("canDeleteOwnData") }],
    },
  },
];
