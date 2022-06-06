const { Contact } = require("../../models");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
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

module.exports = updateStatusContact;
