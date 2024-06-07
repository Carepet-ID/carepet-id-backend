const { Storage } = require("@google-cloud/storage");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

// TODO: Ganti dengan path ke file kunci JSON dari service account Anda
const serviceKeyPath = "/path/to/your/service-account-key.json";

// Inisialisasi client storage
const storage = new Storage({ keyFilename: serviceKeyPath });

// Nama bucket dan file model di GCS
const bucketName = "your-bucket-name";
const modelFileName = "path/to/your/model/model.json";

// Lokasi sementara untuk menyimpan model yang diunduh
const localModelPath = path.join(__dirname, "model.json");

async function downloadModel() {
  const options = {
    destination: localModelPath,
  };

  // Download file dari GCS
  await storage.bucket(bucketName).file(modelFileName).download(options);
  console.log(`Model downloaded to ${localModelPath}`);
}

async function loadModel() {
  await downloadModel();
  const model = await tf.loadGraphModel(`file://${localModelPath}`);
  console.log("Model loaded successfully");

  return model;
}

module.exports = loadModel;
