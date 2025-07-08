import express from 'express'
import dotenv from 'dotenv'
import {messageRouter} from './routes/message.js';
import { detailsRouter } from './routes/details.js';

const app = express();

dotenv.config()
app.set("views",  "views")
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use('/', messageRouter)
app.use('/messages', detailsRouter)

app.use((req, res, next) => {
  res.status(404).render('404')
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('404', {title: "Page not found"});
}) 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Started On PORT: ${PORT}`);
})