const contactsOperations = require("../../models/contacts");

const updateContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updatedContact = await contactsOperations.updateContact(
      contactId,
      req.body
    );
    res.json({
      status: "success",
      code: 200,
      data: { result: updatedContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactById;
