const contactsOperations = require("../../models/contacts");

const getAllContacts = async (req, res, next) => {
  try {
    res.json({
      status: "success",
      code: 200,
      data: { result: await contactsOperations.listContacts() },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllContacts;
