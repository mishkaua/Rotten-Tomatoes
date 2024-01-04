import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../src/connexion_db/connexion";
import UserModel from "../../src/connexion_db/modeluser";
import { genSaltSync, hashSync } from "bcrypt-ts";


export default async function user(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    const {userId} = req.body
    const salt = genSaltSync(10);
    try{
        const user = await UserModel.findById(userId);
        console.log(user)
        if (!user) {
            return res.status(401).json({data:"Couldn't find email"});
        }
        if(req.body.password){
            req.body.password = hashSync(req.body.password, salt);
        }
        await user.updateOne(
            req.body
        );
        user.save()
        return res.status(200).json({name:user.name, email:user.email})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
    
}