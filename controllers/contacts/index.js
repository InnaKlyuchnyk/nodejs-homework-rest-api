const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const deletedContact = require("./deleteContact");
const updateContactById = require("./updateContactById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deletedContact,
  updateContactById,
  updateStatusContact,
};
