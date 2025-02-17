const { Contact } = require("../../models");

const deletedContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deletedContact = await Contact.findByIdAndRemove(contactId);
    if (!deletedContact) {
      const error = new Error(`Contacts with id=${contactId} not found`);
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      message: "Contact deleted",
      data: { result: deletedContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deletedContact;
