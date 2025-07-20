import { Router } from "express";
import { getMessageById } from "../db/queries.js";

const detailsRouter = Router()

detailsRouter.get("/:id", async (req, res) => {
    const {id} = req.params
    const message = await getMessageById(id)
    if(message !== undefined) {
        res.render('details', {message: message, title: "Mini Message Board"})
    } else {
        res.status(404).render('404', {title: "Error Page"})
    }
})

export  { detailsRouter };