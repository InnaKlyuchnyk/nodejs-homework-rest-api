const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const { validation } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");

const validateMiddleware = validation(joiSchema);

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateMiddleware, ctrl.addContact);

router.delete("/:contactId", ctrl.deletedContact);

router.put("/:contactId", validateMiddleware, ctrl.updateContactById);

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrl.updateStatusContact
);

module.exports = router;
