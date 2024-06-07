const tf = require("@tensorflow/tfjs-node");
const { Disease, Prediction } = require("../models");
async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([150, 150])
      .expandDims()
      .toFloat()
      .div(tf.scalar(255.0)); // Normalisasi gambar

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classes = [
      "dandruff",
      "dermatitis",
      "earinfection",
      "fleas",
      "ringworm",
      "skintumors",
    ];

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    const disease = await Disease.findOne({ where: { name: label } });

    const predict = await Prediction.create({
      photo: disease.photo,
      name: label,
      accuracy: confidenceScore,
      diseaseId: disease.id,
    });
    return predict;
  } catch (error) {
    throw error;
  }
}

module.exports = predictClassification;
