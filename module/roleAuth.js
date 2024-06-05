const Boom = require("boom");

// Contoh definisi peran dan izin
const roles = {
  USER: "user",
  ADMIN: "admin",
};

const permissions = {
  [roles.USER]: {
    canAccessOwnData: true,
    canUpdateOwnData: true,
    canDeleteOwnData: true,
    canCreateOwnData: true,
  },
  [roles.ADMIN]: {
    canAccessAllData: true,
    canUpdateAllData: true,
    canDeleteAllData: true,
    canCreateAllData: true,
  },
};

// Middleware untuk verifikasi peran
const verifyRole = (requiredRole) => async (request, h) => {
  // Dapatkan peran pengguna dari token JWT
  const userRole = request.auth.credentials.role;

  // Verifikasi apakah peran pengguna memiliki izin yang diperlukan
  if (!permissions[userRole][requiredRole]) {
    throw Boom.forbidden("You do not have sufficient permissions");
  }

  // Jika verifikasi berhasil, lanjutkan ke handler
  return h.continue;
};

module.exports = verifyRole;
