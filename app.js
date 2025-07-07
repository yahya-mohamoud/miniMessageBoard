import express from 'express'
import dotenv from 'dotenv'

const app = express();

dotenv.config()
app.set("views",  "views")
app.set("view engine", "views")

app.get('/', (req, res) => {
    res.send('Hello world')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started On PORT: ${PORT}`);
})