import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors' //cors is a middleware that allows cross-origin requests. fontend or backend dono different port pr chal raha hota han dono ko configure krna ka liya cors package use hota ha. fontend is running on port 5173 and backend is running on port 3000. so we need to allow cross-origin requests from frontend to backend.
import route from './router/user.js'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGOURL = process.env.MONGODB_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successful.");
    app.listen(PORT, ()=>{ //http://localhost:3000
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});

app.use('/api/user', route);
//http://localhost:3000/api/user/create
//http://localhost:3000/api/user/getAllUsers
//http://localhost:3000/api/user/getone/:id
// http://localhost:3000/api/user/update/:id
// http://localhost:3000/api/user/delete/:id


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
