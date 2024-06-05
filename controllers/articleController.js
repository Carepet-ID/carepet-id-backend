const ImgUpload = require("../module/imgUpload");
const articleService = require("../services/articleService");

const getAllArticles = async (request, h) => {
  try {
    const articles = await articleService.getAllArticles();
    return h.response(articles).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const getArticlesByCategory = async (request, h) => {
  try {
    const articles = await articleService.getArticlesByCategory(
      request.params.category
    );
    return h.response(articles).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const getArticleById = async (request, h) => {
  try {
    const articles = await articleService.getArticleById(request.params.id);
    return h.response(articles).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const createArticle = async (request, h) => {
  try {
    // Lakukan pengunggahan foto ke GCS
    const gcsResponse = await ImgUpload.uploadToGcs(request, h, "articles");
    const { url } = gcsResponse.source; // Ambil URL foto dari respons
    request.payload.photo = url;

    await articleService.createArticle(request.payload);

    return h
      .response({
        status: "success",
        message: "Article added successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const updateArticle = async (request, h) => {
  try {
    // Lakukan pengunggahan foto ke GCS
    const gcsResponse = await ImgUpload.uploadToGcs(request, h, "articles");
    const { url } = gcsResponse.source; // Ambil URL foto dari respons
    request.payload.photo = url;

    await articleService.updateArticle(request.params.id, request.payload);
    return h
      .response({
        status: "success",
        message: "Article update successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const deleteArticle = async (request, h) => {
  try {
    await articleService.deleteArticle(request.params.id);
    return h
      .response({
        status: "success",
        message: "Article delete successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = {
  getAllArticles,
  getArticlesByCategory,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
