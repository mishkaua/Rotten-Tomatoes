import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../src/connexion_db/connexion";
import UserModel from "../../src/connexion_db/modeluser";

export default async function login(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    const {email, password} = req.body
    try{
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.status(401).json({data:'Invalid email'});
        }
        if(password != user.password){
            return res.status(401).json({data:'Wrong Password'});
        }
        return res.status(200).json({name:user.name, email:user.email})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
    
}