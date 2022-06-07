const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const serchContact = await Contact.findById(contactId);
    if (!serchContact) {
      const error = new Error(`Contacts with id=${contactId} not found`);
      error.status = 404;
      throw error;
    }
    res.json({
      status: "success",
      code: 200,
      data: { result: serchContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
