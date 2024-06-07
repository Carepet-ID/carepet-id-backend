const bookmarkService = require("../services/bookmarkService");

const getAllBookmarks = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const bookmarks = await bookmarkService.getAllBookmarks(userId);
    return h.response(bookmarks).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const getBookmarkById = async (request, h) => {
  try {
    const bookmark = await bookmarkService.getBookmarkById(
      request.params.articleId
    );
    return h.response(bookmark).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const addBookmark = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    await bookmarkService.addBookmark(userId, request.params.articleId);
    return h
      .response({ status: "success", message: "Bookmark added successfully!" })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const deleteBookmark = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    await bookmarkService.deleteBookmark(userId, request.params.articleId);
    return h
      .response({
        status: "success",
        message: "Bookmark deleted successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = {
  getAllBookmarks,
  getBookmarkById,
  addBookmark,
  deleteBookmark,
};
