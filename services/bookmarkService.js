const { Article, Bookmark, User } = require("../models");

const getAllBookmarks = async (userId) => {
  try {
    const bookmarks = Bookmark.findAll(
      { where: { userId } },
      {
        include: {
          model: Article,
        },
      }
    );
    return bookmarks;
  } catch (error) {
    throw error;
  }
};

const getBookmarkById = async (articleId) => {
  try {
    const bookmark = await Article.findOne({ where: { articleId } });
    return bookmark;
  } catch (error) {
    throw error;
  }
};

const addBookmark = async (userId, articleId) => {
  try {
    const boomark = await Bookmark.create({
      userId,
      articleId,
    });

    return boomark;
  } catch (error) {
    throw error;
  }
};

const deleteBookmark = async (userId, articleId) => {
  try {
    const bookmark = await Bookmark.findOne({ where: { articleId } });

    if (!bookmark) {
      throw Boom.notFound("Bookmark not found");
    }
    await Bookmark.destroy({ where: { userId, articleId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBookmarks,
  getBookmarkById,
  addBookmark,
  deleteBookmark,
};
