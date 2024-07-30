import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import User from './models/User.js'

const app = express();
const port = 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req,res) => {
    const {userName, email, password} = req.body;
    try{
        const newUser = new User({userName, email, password});
        await newUser.save();
        res.status(201).json({message:'User registered successfully!'});
    }
    catch(err){
        if(err.code === 11000){
            res.status(400).json({error: 'Username or email already exists'});
        }else{
            res.status(500).json({err: 'Error registering user'});
        }
    }
});

app.listen(port, () => {
    console.log(`server running on port number: ${port}`);
});