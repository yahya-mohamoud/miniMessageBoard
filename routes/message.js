import { Router } from "express";
import { addMessage, getAllMessages } from '../db/queries.js'
const messageRouter = Router()

messageRouter.get('/', async (req, res) => {
    const messages = await getAllMessages();
    res.render('index', { title: "Mini Message Board", messages})
})

messageRouter.get('/new', (req, res) => {
    res.render('form', {title: "Mini Message Board"})
})

messageRouter.post('/new', async (req, res) => {
    const text = req.body.text;
    const {user} = req.body;
    console.log(text, user, "from message");
    
    await addMessage(user, text)
    res.redirect('/')
})

export {messageRouter};