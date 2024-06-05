"use strict";
const { Storage } = require("@google-cloud/storage");
const { format } = require("date-fns");
const path = require("path");

const pathKey = path.resolve("./credentials.json");

// TODO: Sesuaikan konfigurasi Storage
const gcs = new Storage({
  projectId: "project_Id",
  keyFilename: pathKey,
});

// TODO: Tambahkan nama bucket yang digunakan
const bucketName = "bucket_name";
const bucket = gcs.bucket(bucketName);

function getPublicUrl(filename) {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

const ImgUpload = {};

ImgUpload.uploadToGcs = async (request, h, gcsFolder) => {
  const file = request.payload.photo; // Menggunakan properti `photo` untuk mengakses file

  if (!file) {
    return h.response({ error: "No file uploaded" }).code(400);
  }

  const gcsname = `${gcsFolder}/${format(
    new Date(),
    "yyyymmdd-HHMMss"
  )}${path.extname(file.hapi.filename)}`;
  const gcsFile = bucket.file(gcsname);

  return new Promise((resolve, reject) => {
    const stream = gcsFile.createWriteStream({
      metadata: {
        contentType: file.hapi.headers["content-type"],
      },
    });

    stream.on("error", (err) => {
      console.error("Error uploading to GCS:", err);
      reject(h.response({ error: "Failed to upload file" }).code(500));
    });

    stream.on("finish", () => {
      const publicUrl = getPublicUrl(gcsname);
      resolve(h.response({ url: publicUrl }).code(200));
    });

    stream.end(file._data);
  });
};

module.exports = ImgUpload;
