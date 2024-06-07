const { Product, DiseaseProduct } = require("../models");

const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw error;
  }
};

const getProductsByCategory = async (category) => {
  try {
    const Products = await Product.findAll({ where: { category: category } });
    return Products;
  } catch (error) {
    throw error;
  }
};

const createProduct = async (payload) => {
  try {
    const product = await Product.create({
      photo: payload.photo,
      name: payload.name,
      category: payload.category,
      price: payload.price,
      linkStore: payload.linkStore,
    });

    if (payload.diseaseIds && payload.diseaseIds.length > 0) {
      const diseaseProductEntries = payload.diseaseIds.map((diseaseId) => ({
        productId: product.id,
        diseaseId,
      }));
      await DiseaseProduct.bulkCreate(diseaseProductEntries);
    }
    return product;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId, payload) => {
  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      throw Boom.notFound("Product not found");
    }

    await Product.update({ ...payload }, { where: { id: ProductId } });
  } catch (error) {}
};

const deleteProduct = async (productId) => {
  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      throw Boom.notFound("Product not found");
    }

    await Product.destroy({ where: { id: ProductId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
};
