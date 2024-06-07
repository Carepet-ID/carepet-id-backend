const Boom = require("boom");
const { Disease, Product } = require("../models");

const getAllDiseases = async () => {
  try {
    const diseases = await Disease.findAll();
    return diseases;
  } catch (error) {
    throw error;
  }
};

const getDiseasesByCategory = async (category) => {
  try {
    const diseases = await Disease.findAll({ where: { category: category } });
    return diseases;
  } catch (error) {
    throw error;
  }
};

const getDiseaseById = async (id) => {
  try {
    const disease = await Disease.findByPk(id, {
      include: [
        {
          model: Product,
          as: "products",
        },
      ],
    });
    return disease;
  } catch (error) {
    throw error;
  }
};

const createDisease = async (payload) => {
  try {
    const disease = await Disease.create(...payload);
    return disease;
  } catch (error) {
    throw error;
  }
};

const updateDisease = async (DiseaseId, payload) => {
  try {
    const disease = await Disease.findByPk(DiseaseId);

    if (!disease) {
      throw Boom.notFound("Disease not found");
    }

    await Disease.update({ ...payload }, { where: { id: DiseaseId } });
  } catch (error) {}
};

const deleteDisease = async (DiseaseId) => {
  try {
    const disease = await Disease.findByPk(DiseaseId);

    if (!disease) {
      throw Boom.notFound("Disease not found");
    }

    await Disease.destroy({ where: { id: DiseaseId } });
  } catch (error) {
    throw error;
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
