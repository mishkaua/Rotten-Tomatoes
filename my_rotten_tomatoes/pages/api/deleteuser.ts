import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../src/connexion_db/connexion";
import UserModel from "../../src/connexion_db/modeluser";


export default async function deleteuser(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    const {userId} = req.body
    try{
        const user = await UserModel.findByIdAndDelete(userId);
        console.log(user)
        if (!user) {
            return res.status(401).json({data:"Account doesn't exist"});
        }
        
        return res.status(200).json({data:'Account successfully deleted'})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
    
}