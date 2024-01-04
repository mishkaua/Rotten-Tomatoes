import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../src/connexion_db/connexion";
import { IUser } from "../../src/connexion_db/modeluser";
import { error } from "console";
import UserModel from "../../src/connexion_db/modeluser";
import { genSaltSync, hashSync } from "bcrypt-ts";

export default async function register(req:NextApiRequest, res:NextApiResponse) {
    await connect()
    const {email, password, name} = req.body
    try{
        const user = await UserModel.findOne({email});
        if (user) {
            return res.status(401).json({data:'Email already exist !'});
        }
        const salt = genSaltSync(10);
        const hash = hashSync(password, salt);
        const NewUser: IUser = new UserModel({
            email, password:hash , name
        })
        await NewUser.save()
        return res.status(200).json({name:NewUser.name, email:NewUser.email})
    }
    catch(error){
        return res.status(500).json({data:'Internal server error'});
    }
}