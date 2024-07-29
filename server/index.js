import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req,res) => {
    res.send("hello world!");
});

app.get('/api/greet', (req,res) => {
    res.json({
        "text":"this is darsh"
    })
});

app.listen(port, () => {
    console.log(`server running on port number: ${port}`);
});