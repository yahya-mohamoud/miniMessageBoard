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
    const {text} = req.body;
    const {user} = req.body;
    
    await addMessage(user, text)
    res.redirect('/')
})

// messageRouter.get('/test', async (req, res) => {
//   const results = await test();
//   res.json(results);
// });

export {messageRouter};