const { Article } = require("../models");
const Boom = require("boom");

const getAllArticles = async () => {
  try {
    const articles = await Article.findAll();
    return articles;
  } catch (error) {
    throw error;
  }
};

const getArticlesByCategory = async (category) => {
  try {
    const articles = await Article.findAll({ where: { category: category } });
    return articles;
  } catch (error) {
    throw error;
  }
};
const getArticleById = async (id) => {
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      throw Boom.notFound("Article not found");
    }
    return article;
  } catch (error) {
    throw error;
  }
};

const createArticle = async (payload) => {
  try {
    const article = await Article.create({ ...payload });
    return article;
  } catch (error) {
    throw error;
  }
};

const updateArticle = async (articleId, payload) => {
  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      throw Boom.notFound("Article not found");
    }

    await Article.update({ ...payload }, { where: { id: articleId } });
  } catch (error) {}
};

const deleteArticle = async (articleId) => {
  try {
    const article = await Article.findByPk(articleId);

    if (!article) {
      throw Boom.notFound("Article not found");
    }

    await Article.destroy({ where: { id: articleId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllArticles,
  getArticlesByCategory,
  updateArticle,
  createArticle,
  deleteArticle,
  getArticleById,
};
