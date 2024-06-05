const ImgUpload = require("../module/imgUpload");
const dogService = require("../services/dogService");

const addDog = async (request, h) => {
  try {
    // Lakukan pengunggahan foto ke GCS
    const gcsResponse = await ImgUpload.uploadToGcs(request, h, "dogs");
    const { url } = gcsResponse.source; // Ambil URL foto dari respons
    request.payload.photo = url;

    const userId = request.auth.credentials.id;
    const newDog = await dogService.addDog(request.payload, userId);
    return h
      .response({
        status: "success",
        message: "Dog added successfully!",
        data: newDog,
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const getAllDogs = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const dogs = await dogService.getAllDogs(userId);
    return h.response(dogs).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const getDogById = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    const dog = await dogService.getDogById(userId, request.params.dogId);

    return h.response(dog).code(200);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};
const updateDog = async (request, h) => {
  try {
    // Lakukan pengunggahan foto ke GCS
    const gcsResponse = await ImgUpload.uploadToGcs(request, h, "dogs");
    const { url } = gcsResponse.source; // Ambil URL foto dari respons
    request.payload.photo = url;

    const userId = request.auth.credentials.id;
    await dogService.updateDog(userId, request.params.dogId, request.payload);
    return h
      .response({
        status: "success",
        message: "Dog updated successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

const deleteDog = async (request, h) => {
  try {
    const userId = request.auth.credentials.id;
    await dogService.deleteDog(userId, request.params.dogId);
    return h
      .response({
        status: "success",
        message: "Dog deleted successfully!",
      })
      .code(201);
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
};

module.exports = { addDog, getAllDogs, getDogById, updateDog, deleteDog };
