const Boom = require("boom");
const { User } = require("../models");
const bcrypt = require("bcrypt");

const register = async (payload) => {
  try {
    const isUsernameExist = await User.findOne({
      where: { username: payload.username },
    });
    const isEmailExist = await User.findOne({
      where: { email: payload.email },
    });

    if (isUsernameExist) {
      throw new Error("Username already exists");
    }

    if (isEmailExist) {
      throw new Error("Email already exists");
    }

    const user = await User.create({
      ...payload,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

const validateUser = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user) {
      return null;
    }
    if (!isPasswordValid) {
      return null;
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const profile = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { message: "User not found!" };
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, payload) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw Boom.unauthorized("You are not authorized to update this user");
    }

    await User.update(
      { ...payload },
      {
        where: {
          id: userId,
        },
      }
    );
  } catch (error) {
    throw Boom.boomify(error);
  }
};

module.exports = { register, validateUser, profile, updateUser };
