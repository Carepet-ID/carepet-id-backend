const ImgUpload = require("../module/imgUpload");
const predictClassification = require("../services/predictionService");

async function postPredictHandler(request, h) {
  try {
    // const gcsResponse = await ImgUpload.uploadToGcs(request, h, "users");
    // const { url } = gcsResponse.source; // Ambil URL foto dari respons
    // request.payload.photo = url;

    const { model } = request.server.app;

    const predict = await predictClassification(model, request.payload.photo);

    const response = h.response({
      status: "success",
      message:
        predict.accuracy > 90
          ? "Model is predicted successfully."
          : "Model is predicted successfully but under threshold. Please use the correct picture",
      predict,
    });
    response.code(201);
    return response;
  } catch (error) {
    return h.response({ error: error.message }).code(500);
  }
}

module.exports = postPredictHandler;
