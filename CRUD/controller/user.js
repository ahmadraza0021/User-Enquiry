import userModel from "../model/user.js";

export const create = async(req, res) => {

    try {
        const userData = new userModel(req.body);
        const {email} = userData;

        const userExist = await userModel.findOne({email});
        if(userExist){
            return res.status(400).json({message: "User already Exists."});
        }
        const savedUser = await userData.save();
        // res.status(201).json(savedUser);
        res.status(201).json({message: "User Created successfully."});
    } catch (error) {
        res.status(500).json({error: "Internal Server error."});
    }
}





export const getAll = async(req, res) => {
    try{
        const userExist = await userModel.find();
        if(!userExist){
            return res.status(404).json({message: "User Not Found."});
            }
            // OR
            // if(userExist.length === 0){
            //     return res.status(404).json({message: "User Not Found."});
            // }
        res.status(200).json(userExist);

} catch(error){
    res.status(500).json({error: "Internal Server error."});
}
};






export const getOne = async(req, res) => {
    try{
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        if(!userExist){
            return res.status(404).json({message: "User Not Found."});
            }
            // OR
            // if(userExist.length === 0){
            //     return res.status(404).json({message: "User Not Found."});
            // }
        res.status(200).json(userExist);

} catch(error){
    res.status(500).json({error: "Internal Server error."});
}
};






export const update = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        // OR
        // const userExist = await userModel.findOne({_id: id});
        if(!userExist){
            return res.status(404).json({message: "User Not Found."});
        }
        const updateUser = await userModel.findByIdAndUpdate(id, req.body, {new: true});
        // res.status(201).json(updateUser);
        //OR
        res.status(200).json({message: "User updated successfully."});
    } catch (error) {
        res.status(500).json({error: "Internal Server error."});
        
    }
};







export const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const userExist = await userModel.findById(id);
        // OR
        // const userExist = await userModel.findOne({_id: id});
        if(!userExist){
            return res.status(404).json({message: "User Not Found."});
        }
         await userModel.findByIdAndDelete(id);
        res.status(201).json({message: "User deleted successfully."});
        //OR
        // res.status(200).json({message: "User deleted successfully."});
    } catch (error) {
        res.status(500).json({error: "Internal Server error."});
        
    }
}