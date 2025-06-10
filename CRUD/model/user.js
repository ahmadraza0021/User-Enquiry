import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    // name: String,
    // email: String,
    // address: String,
    // message: String,  
    fname: {
        type: String,
        required: true
    }, 
    lname: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true
    }, 
});

const userModel = mongoose.model('User', userSchema);

export default userModel;