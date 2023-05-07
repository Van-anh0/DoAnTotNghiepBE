import express from "express"
import { createCV, deleteAllCVs, deleteCV, getAllCV, getByEmailCV, getByIDCV, updatedCV } from "../controllers/CV.js"

const router = express.Router()

//CREATE
router.post("/", createCV)

//UPDATE
router.put("/:id", updatedCV)


//DELETE
router.delete("/:id", deleteCV)

//DELETE ALL
router.delete("/",deleteAllCVs)

//GET
router.get("/:id", getByIDCV)
router.get("/get-one/:email", getByEmailCV)

//GET ALL
router.get("/", getAllCV);

export default router