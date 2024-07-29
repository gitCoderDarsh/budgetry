import express from 'express';
import cors from 'cors';
import connectDB from './db.js';

const app = express();
const port = 3001;

connectDB();

app.use(cors());

app.get('/', (req,res) => {
    res.send("hello world!");
});

app.get('/api/greet', (req,res) => {
    res.json({
        "text":"this is a project yeah"
    })
});

app.listen(port, () => {
    console.log(`server running on port number: ${port}`);
});