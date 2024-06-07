const ImgUpload = require("../module/imgUpload");
const diseaseService = require("../services/diseaseService");

const getAllDiseases = async (request, h) => {
  try {
    const diseases = await diseaseService.getAllDiseases();
    return h.response(diseases).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const getDiseasesByCategory = async (request, h) => {
  try {
    const diseases = await diseaseService.getDiseasesByCategory(
      request.params.category
    );
    return h.response(diseases).code(200);
  } catch (error) {
    throw error;
  }
};

const getDiseaseById = async (request, h) => {
  try {
    const disease = await diseaseService.getDiseaseById(request.params.id);
    return h.response(disease).code(200);
  } catch (error) {
    throw error;
  }
};

const createDisease = async (request, h) => {
  try {
    // Lakukan pengunggahan foto ke GCS
    const gcsResponse = await ImgUpload.uploadToGcs(request, h, "diseases");
    const { url } = gcsResponse.source; // Ambil URL foto dari respons
    request.payload.photo = url;

    await diseaseService.createDisease(request.payload);

    return h
      .response({
        status: "success",
        message: "Disease added successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const updateDisease = async (request, h) => {
  try {
    // Lakukan pengunggahan foto ke GCS
    const gcsResponse = await ImgUpload.uploadToGcs(request, h, "diseases");
    const { url } = gcsResponse.source; // Ambil URL foto dari respons
    request.payload.photo = url;
    await diseaseService.updateDisease(request.params.id, request.payload);
    return h
      .response({
        status: "success",
        message: "Disease update successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const deleteDisease = async (request, h) => {
  try {
    await diseaseService.deleteDisease(request.params.id);
    return h
      .response({
        status: "success",
        message: "Disease delete successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = {
  getAllDiseases,
  getDiseaseById,
  getDiseasesByCategory,
  createDisease,
  updateDisease,
  deleteDisease,
};
