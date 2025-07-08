import express from 'express'
import dotenv from 'dotenv'
import messageRouter from './routes/message.js';

const app = express();

dotenv.config()
app.set("views",  "views")
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', messageRouter)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Started On PORT: ${PORT}`);
})