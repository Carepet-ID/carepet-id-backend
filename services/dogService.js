const Boom = require("boom");
const { Dog, UserDog, User } = require("../models");

const addDog = async (payload, userId) => {
  try {
    const newDog = await Dog.create({
      photo: payload.photo,
      name: payload.name,
      about: payload.about,
      age: payload.age,
      birthday: payload.birthday,
      breed: payload.breed,
      skinColor: payload.skinColor,
      gender: payload.gender,
    });

    await UserDog.create({
      userId: userId,
      dogId: newDog.id,
    });

    return newDog;
  } catch (error) {
    throw error;
  }
};

const getAllDogs = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: {
        model: Dog,
      },
    });

    return user.Dogs;
  } catch (error) {
    throw error;
  }
};

const getDogById = async (userId, dogId) => {
  try {
    const userDog = await UserDog.findOne({
      where: {
        userId: userId,
        dogId: dogId,
      },
    });

    if (!userDog) {
      throw Boom.unauthorized("You are not authorized to see this dog");
    }

    const dog = await Dog.findByPk(dogId);
    return dog;
  } catch (error) {
    throw error;
  }
};

const updateDog = async (userId, dogId, payload) => {
  try {
    const userDog = await UserDog.findOne({
      where: {
        userId: userId,
        dogId: dogId,
      },
    });

    if (!userDog) {
      throw Boom.unauthorized("You are not authorized to update this dog");
    }

    await Dog.update(
      { ...payload },
      {
        where: {
          id: dogId,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

const deleteDog = async (userId, dogId) => {
  try {
    const userDog = await UserDog.findOne({
      where: {
        userId: userId,
        dogId: dogId,
      },
    });

    if (!userDog) {
      throw Boom.unauthorized("You are not authorized to delete this dog");
    }

    await UserDog.destroy({
      where: {
        userId: userId,
        dogId: dogId,
      },
    });

    await Dog.destroy({
      where: {
        id: dogId,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { addDog, getAllDogs, getDogById, updateDog, deleteDog };
