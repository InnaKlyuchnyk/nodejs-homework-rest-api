const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const { validation } = require("../../middlewares");
const { contactSchema } = require("../../schemas");

const validateMiddleware = validation(contactSchema);

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateMiddleware, ctrl.addContact);

router.delete("/:contactId", ctrl.deletedContact);

router.put("/:contactId", validateMiddleware, ctrl.updateContactById);

module.exports = router;
