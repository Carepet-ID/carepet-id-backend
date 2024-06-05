module.exports = {
  jwtSecret: process.env.JWT_SECRET || "carepet_id",
  jwtExpiration: process.env.JWT_EXPIRATION || "4h", // Masa berlaku token
};
