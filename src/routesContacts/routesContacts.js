const express=require("express");
const router=express.Router();
const controller=require("../controllerContacts/controllerContacts");

router.get("/",controller.getAll)
router.get("/:id",controller.getById)

router.post("/cadastrar",controller.createContacts)

router.delete("/:id",controller.deleteContact)



module.exports=router